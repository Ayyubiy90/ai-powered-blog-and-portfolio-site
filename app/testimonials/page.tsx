import { Card } from "../../components/ui/card";
import Link from "next/link";

const testimonials = [
  {
    name: "Client Name 1",
    role: "CEO, Company 1",
    feedback: "This project exceeded my expectations!",
  },
  {
    name: "Client Name 2",
    role: "CTO, Company 2",
    feedback: "A fantastic experience working together.",
  },
  // Add more testimonials as needed
];

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Testimonials</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6">
            <h2 className="text-xl font-semibold">{testimonial.name}</h2>
            <p className="text-gray-500">{testimonial.role}</p>
            <p className="mt-4">{testimonial.feedback}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
