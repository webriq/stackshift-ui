export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button style={{ backgroundColor: "tomato", color: "white", padding: 12 }}>{children}</button>
  );
}
