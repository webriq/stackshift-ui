import type { PropDefinition } from "@/data/components";

interface PropsTableProps {
  props: PropDefinition[];
}

export function PropsTable({ props }: PropsTableProps) {
  if (props.length === 0) {
    return (
      <p className="text-gray-500 text-sm italic">
        This component accepts standard HTML attributes.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Prop</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Default</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, index) => (
            <tr
              key={prop.name}
              className={index !== props.length - 1 ? "border-b" : ""}
            >
              <td className="py-3 px-4">
                <code className="text-sm font-mono text-pink-600 bg-pink-50 px-1.5 py-0.5 rounded">
                  {prop.name}
                </code>
                {prop.required && (
                  <span className="ml-1 text-red-500 text-xs" title="Required">
                    *
                  </span>
                )}
              </td>
              <td className="py-3 px-4">
                <code className="text-xs font-mono text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded break-all">
                  {prop.type}
                </code>
              </td>
              <td className="py-3 px-4">
                {prop.default ? (
                  <code className="text-xs font-mono text-gray-600">{prop.default}</code>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </td>
              <td className="py-3 px-4 text-gray-600">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
