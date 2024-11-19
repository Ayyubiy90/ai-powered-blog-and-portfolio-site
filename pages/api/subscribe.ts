import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Check if environment variables are properly set
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;
    const dataCenter = process.env.MAILCHIMP_DATA_CENTER;

    if (!apiKey || !listId || !dataCenter) {
      console.error('Missing environment variables:', {
        hasApiKey: !!apiKey,
        hasListId: !!listId,
        hasDataCenter: !!dataCenter
      });
      return res.status(500).json({ 
        message: 'Server configuration error. Please contact administrator.' 
      });
    }

    const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members`;

    const data = {
      email_address: email,
      status: 'subscribed',
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `apikey ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        res.status(200).json({ message: 'Thank you for subscribing!' });
      } else {
        console.error('Mailchimp API error:', responseData);
        res.status(response.status).json({ 
          message: responseData.detail || 'Subscription failed. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      res.status(500).json({ message: 'An error occurred. Please try again.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
