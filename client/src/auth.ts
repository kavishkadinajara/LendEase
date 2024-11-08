import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
      const { name, email, password } = req.body;

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
          const data = await response.json();
          res.status(200).json({ token: data.token });
      } else {
          const error = await response.json();
          res.status(400).json({ error: error.message });
      }
  } else {
      res.status(405).end(); // Method Not Allowed
  }
}
