import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  console.table(id);
  return <h1>북 {id}</h1>;
}
