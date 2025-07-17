import { Button, Label, Textarea } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Textarea> = {
  title: "Common/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A textarea component for multi-line text input with various styling options and validation support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the textarea",
    },
    disabled: {
      control: "boolean",
      description: "Whether the textarea is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether the textarea is required",
    },
    rows: {
      control: { type: "number", min: 1, max: 20 },
      description: "Number of visible text lines",
    },
    resize: {
      control: { type: "radio" },
      options: ["none", "both", "horizontal", "vertical"],
      description: "Resize behavior of the textarea",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => <Textarea placeholder="Enter your message here..." className="w-80" />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Write your message here..." />
    </div>
  ),
};

export const ControlledValue: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const maxLength = 200;

    return (
      <div className="space-y-2 w-80">
        <Label htmlFor="controlled-textarea">Description</Label>
        <Textarea
          id="controlled-textarea"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Describe your experience..."
          maxLength={maxLength}
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>
            {value.length}/{maxLength} characters
          </span>
          <span>{maxLength - value.length} remaining</span>
        </div>
      </div>
    );
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div className="space-y-2">
        <Label>Small (3 rows)</Label>
        <Textarea placeholder="Small textarea..." rows={3} />
      </div>

      <div className="space-y-2">
        <Label>Medium (5 rows)</Label>
        <Textarea placeholder="Medium textarea..." rows={5} />
      </div>

      <div className="space-y-2">
        <Label>Large (8 rows)</Label>
        <Textarea placeholder="Large textarea..." rows={8} />
      </div>
    </div>
  ),
};

export const WithValidation: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      setValue(newValue);

      if (newValue.length < 10) {
        setError("Message must be at least 10 characters long");
      } else if (newValue.length > 500) {
        setError("Message cannot exceed 500 characters");
      } else {
        setError("");
      }
    };

    return (
      <div className="space-y-2 w-80">
        <Label htmlFor="validated-textarea">
          Feedback <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="validated-textarea"
          value={value}
          onChange={handleChange}
          placeholder="Please provide your feedback (minimum 10 characters)..."
          className={error ? "border-red-500 focus:border-red-500" : ""}
          rows={4}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        {!error && value.length >= 10 && <p className="text-sm text-green-500">✓ Valid feedback</p>}
      </div>
    );
  },
};

export const CommentBox: Story = {
  render: () => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([
      { id: 1, author: "John Doe", text: "Great article! Very informative.", time: "2 hours ago" },
      {
        id: 2,
        author: "Jane Smith",
        text: "Thanks for sharing this. It helped me understand the concept better.",
        time: "4 hours ago",
      },
    ]);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (comment.trim()) {
        setComments(prev => [
          {
            id: Date.now(),
            author: "You",
            text: comment,
            time: "Just now",
          },
          ...prev,
        ]);
        setComment("");
      }
    };

    return (
      <div className="space-y-6 w-96">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Comments</h3>
          <p className="text-sm text-gray-600">Share your thoughts about this article</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Write a comment..."
            rows={3}
          />
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{comment.length}/500 characters</span>
            <Button type="submit" disabled={!comment.trim()}>
              Post Comment
            </Button>
          </div>
        </form>

        <div className="space-y-4">
          {comments.map(comment => (
            <div key={comment.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-sm">{comment.author}</span>
                <span className="text-xs text-gray-500">{comment.time}</span>
              </div>
              <p className="text-sm text-gray-700">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const CodeEditor: Story = {
  render: () => {
    const [code, setCode] = useState(`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));`);

    return (
      <div className="space-y-4 w-96">
        <div className="space-y-2">
          <Label htmlFor="code-editor">JavaScript Code</Label>
          <Textarea
            id="code-editor"
            value={code}
            onChange={e => setCode(e.target.value)}
            className="font-mono text-sm"
            rows={8}
            style={{ resize: "both" }}
          />
        </div>

        <div className="flex gap-2">
          <Button size="sm">Run Code</Button>
          <Button size="sm" variant="outline">
            Format
          </Button>
          <Button size="sm" variant="outline">
            Clear
          </Button>
        </div>

        <div className="p-3 bg-black text-green-400 rounded font-mono text-sm">
          <div className="text-gray-400 mb-1">Output:</div>
          <div>Hello, World!</div>
        </div>
      </div>
    );
  },
};

export const DisabledState: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label>Disabled Textarea</Label>
        <Textarea disabled value="This textarea is disabled and cannot be edited." rows={3} />
      </div>

      <div className="space-y-2">
        <Label>Read-only Textarea</Label>
        <Textarea
          readOnly
          value="This textarea is read-only. You can select and copy the text but cannot edit it."
          rows={3}
          className="bg-gray-50"
        />
      </div>
    </div>
  ),
};
