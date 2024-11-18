import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Use environment variables without NEXT_PUBLIC_ for security
    const apiKey = process.env.MAILCHIMP_API_KEY; // Change this if you want to keep it secure
    const listId = process.env.MAILCHIMP_LIST_ID; // Change this if you want to keep it secure
    const dataCenter = process.env.MAILCHIMP_DATA_CENTER; // Change this if you want to keep it secure
    const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members`;

    const data = {
      email_address: email,
      status: 'subscribed',
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `apikey ${apiKey}`, // Corrected format
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        res.status(200).json({ message: 'Thank you for subscribing!' });
      } else {
        const errorData = await response.json();
        res.status(response.status).json({ message: errorData.detail || 'Subscription failed. Please try again.' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'An error occurred. Please try again.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}