interface LocalButtonProps {
  children: React.ReactNode;
  className?: string; // Add this line
}

export default function Button({ children, className }: LocalButtonProps) {
  return (
    <button
      className={className}
      style={{ backgroundColor: "tomato", color: "white", padding: 12 }}>
      {children}
    </button>
  );
}
