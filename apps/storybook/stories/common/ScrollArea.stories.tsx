import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea, ScrollBar } from "@stackshift-ui/react";

const meta: Meta<typeof ScrollArea> = {
  title: "Common/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Basic: Story = {
  render: args => (
    <ScrollArea className="h-72 w-48 rounded-md border p-4" {...args}>
      <div className="space-y-2">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const HorizontalScroll: Story = {
  render: args => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border" {...args}>
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="shrink-0 w-32 h-20 bg-gray-100 rounded-md flex items-center justify-center text-sm"
          >
            Card {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const BothDirections: Story = {
  render: args => (
    <ScrollArea className="h-72 w-96 rounded-md border" {...args}>
      <div className="p-4">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              {Array.from({ length: 10 }).map((_, i) => (
                <th key={i} className="p-2 text-left min-w-[120px]">
                  Column {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 50 }).map((_, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                {Array.from({ length: 10 }).map((_, colIndex) => (
                  <td key={colIndex} className="p-2 min-w-[120px]">
                    Cell {rowIndex + 1}-{colIndex + 1}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const LongText: Story = {
  render: args => (
    <ScrollArea className="h-48 w-80 rounded-md border p-4" {...args}>
      <div className="text-sm space-y-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
          dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </ScrollArea>
  ),
};

export const ChatMessages: Story = {
  render: args => (
    <ScrollArea className="h-80 w-96 rounded-md border" {...args}>
      <div className="p-4 space-y-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={`flex ${i % 3 === 0 ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                i % 3 === 0 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {i % 3 === 0 
                ? `This is my message ${i + 1}. It can be quite long and will wrap to multiple lines.`
                : `Message ${i + 1} from another user. This could also be a longer message.`
              }
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const FileExplorer: Story = {
  render: args => (
    <ScrollArea className="h-64 w-64 rounded-md border" {...args}>
      <div className="p-2">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
            <span>📁</span>
            <span className="text-sm">Documents</span>
          </div>
          <div className="ml-4 space-y-1">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
                <span>📄</span>
                <span className="text-sm">Document {i + 1}.pdf</span>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
            <span>📁</span>
            <span className="text-sm">Images</span>
          </div>
          <div className="ml-4 space-y-1">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
                <span>🖼️</span>
                <span className="text-sm">Image {i + 1}.jpg</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  ),
};

export const CodeBlock: Story = {
  render: args => (
    <ScrollArea className="h-64 w-full max-w-2xl rounded-md border" {...args}>
      <pre className="p-4 text-sm bg-gray-900 text-gray-100">
        <code>{`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Generate first 20 Fibonacci numbers
const fibNumbers = [];
for (let i = 0; i < 20; i++) {
  fibNumbers.push(fibonacci(i));
}

console.log('Fibonacci sequence:', fibNumbers);

// More code to demonstrate scrolling...
const memoizedFib = (() => {
  const cache = {};
  return function fib(n) {
    if (n in cache) return cache[n];
    if (n <= 1) return n;
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
})();

// Performance comparison
console.time('Regular fibonacci');
fibonacci(35);
console.timeEnd('Regular fibonacci');

console.time('Memoized fibonacci');
memoizedFib(35);
console.timeEnd('Memoized fibonacci');

// Additional utility functions
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

const primes = [];
for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) primes.push(i);
}

console.log('Prime numbers up to 100:', primes);`}</code>
      </pre>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};