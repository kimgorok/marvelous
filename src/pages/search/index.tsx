import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useEffect, useState } from "react";
import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-books";
import { useRouter } from "next/router";
import { BookData } from "@/types";
import Head from "next/head";

// context에는 현재 브라우저에서 받은 모든 요청 정보가 다 포함되어 있음
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const q = context.query.q; // 이렇게 쿼리스트링 꺼내올 수 있음
//   const books = await fetchBooks(q as string);
//   return {
//     props: { books },
//   };
// };

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const q = context.query.q; // 이렇게 쿼리스트링 꺼내올 수 있음
//   const books = await fetchBooks(q as string);
//   return {
//     props: { books },
//   };
// };

export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      fetchSearchResult();
    }
  }, [q]);
  return (
    <>
      <Head>
        <title>😎현중 책방 - 검색 결과</title>
        <meta property="og:image" content="'/thumbnail.png" />
        <meta property="og:title" content="😎현중 책방" />
        <meta
          property="og:description"
          content="😎현중 책방입니다. 편안하게 둘러보세요"
        />
      </Head>
      <div>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
