import Head from "next/head";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { NextPage } from "next/types";
import type { User } from "next-auth";

interface Props {
  data: User;
}

const Profile: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex bg-red-400">
        {data && (
          <div>
            <p>Hello, {data.name}</p>
            <p>Email: {data.email}</p>
          </div>
        )}
      </main>
    </>
  );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=${
          process.env.NODE_ENV === "production"
            ? "https://squarenext.vercel.app/"
            : "http://localhost:3000/"
        }`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: session.user ? session.user : null,
    },
  };
};
