import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";

// context에는 현재 브라우저에서 받은 모든 요청 정보가 다 포함되어 있음
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q; // 이렇게 쿼리스트링 꺼내올 수 있음
  const books = await fetchBooks(q as string);
  return {
    props: { books },
  };
};

export default function Page({
  books,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
