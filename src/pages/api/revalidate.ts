import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await res.revalidate("/"); // 어디에 On-Demand ISR을 적용할지
    return res.json({ revalidate: true });
  } catch (err) {
    res.status(500).send("Revalidation Failed" + err);
  }
}
