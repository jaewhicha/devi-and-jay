import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Devi & Jay',
  description: 'Welcome to our website',
};
export default function Web() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  );
}
