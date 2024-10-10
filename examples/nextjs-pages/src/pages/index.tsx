import { default as LocalButton } from "@/components/Button";
import { Button, Header, Image, Link } from "@stackshift-ui/components";
import { default as NextLink } from "next/link";

export default function Home() {
  return (
    <>
      <section className="my-12 p-6 bg-gray-100 rounded-lg shadow-md">
        <LocalButton className="mb-4">Local Orange Button</LocalButton>
        <br />
        <NextLink href="/anotherpage" className="text-blue-500 hover:underline" preload="true">
          Go to another page
        </NextLink>
      </section>

      <section className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <p className="text-sm text-gray-500 mb-4">
          If the overrides works, the below components should match with the default ones above.
        </p>

        <Button className="mb-4">Local Orange Button</Button>
        <br />
        <Link href="/anotherpage" className="text-blue-500 hover:underline">
          Go to another page
        </Link>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0yse5DXb_jaST1idrKdbINASzCREy-gp65ws-HUqUxfIS2O4f"
          alt="lily james"
          width="300"
          height="300"
          className="mt-4 rounded-lg shadow-md"
        />

        <br />
        <br />
        <p className="text-sm text-gray-500 mt-4">
          This is an example of a button component used in another package. It should also look the
          same as per above.
        </p>
        <Header />
      </section>
    </>
  );
}