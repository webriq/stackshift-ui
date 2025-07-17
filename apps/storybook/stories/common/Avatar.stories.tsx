import { Avatar, AvatarFallback, AvatarImage } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Avatar> = {
  title: "Common/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A visual representation of a user or entity. Built on Radix UI Avatar primitive with support for images and fallback content.",
      },
    },
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for the avatar container",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: args => (
    <Avatar>
      <AvatarImage src="/webriq-logo.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Default avatar with image and fallback initials.",
      },
    },
  },
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="" alt="John Doe" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar showing fallback initials when no image is provided.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src="/webriq-logo.png" alt="Small" />
        <AvatarFallback className="text-xs">SM</AvatarFallback>
      </Avatar>
      <Avatar className="h-10 w-10">
        <AvatarImage src="/webriq-logo.png" alt="Medium" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage src="/webriq-logo.png" alt="Large" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarImage src="/webriq-logo.png" alt="Extra Large" />
        <AvatarFallback className="text-lg">XL</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different avatar sizes using className to control dimensions.",
      },
    },
  },
};

export const UserList: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      {[
        {
          name: "John Doe",
          email: "john@example.com",
          image: "/webriq-logo.png",
        },
        {
          name: "Jane Smith",
          email: "jane@example.com",
          image: "/webriq-logo.png",
        },
        { name: "Alex Johnson", email: "alex@example.com", image: "" },
        { name: "Maria Garcia", email: "maria@example.com", image: "" },
      ].map(user => (
        <div key={user.email} className="flex items-center gap-3 p-3 rounded-lg border">
          <Avatar>
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map(n => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatars used in a user list interface with profile information.",
      },
    },
  },
};

export const AvatarGroup: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Avatar className="border-2 border-white">
        <AvatarImage src="/webriq-logo.png" alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white">
        <AvatarImage src="/webriq-logo.png" alt="User 2" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white">
        <AvatarImage src="/webriq-logo.png" alt="User 3" />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white bg-gray-100">
        <AvatarFallback className="text-xs text-gray-600">+5</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Overlapping avatars showing team members with a count indicator for additional members.",
      },
    },
  },
};

export const CustomStyling: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="h-12 w-12 border-2 border-blue-500">
        <AvatarImage src="/webriq-logo.png" alt="Bordered" />
        <AvatarFallback className="bg-blue-100 text-blue-700">BD</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12 rounded-lg">
        <AvatarImage src="/webriq-logo.png" alt="Square" />
        <AvatarFallback className="bg-green-100 text-green-700 rounded-lg">SQ</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage src="" alt="Gradient" />
        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
          GR
        </AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatars with custom styling including borders, shapes, and gradient backgrounds.",
      },
    },
  },
};

export const StatusIndicator: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="relative">
        <Avatar>
          <AvatarImage src="/webriq-logo.png" alt="Online User" />
          <AvatarFallback>ON</AvatarFallback>
        </Avatar>
        <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
      </div>
      <div className="relative">
        <Avatar>
          <AvatarImage src="/webriq-logo.png" alt="Away User" />
          <AvatarFallback>AW</AvatarFallback>
        </Avatar>
        <div className="absolute bottom-0 right-0 h-3 w-3 bg-yellow-500 border-2 border-white rounded-full"></div>
      </div>
      <div className="relative">
        <Avatar>
          <AvatarImage src="" alt="Offline User" />
          <AvatarFallback>OF</AvatarFallback>
        </Avatar>
        <div className="absolute bottom-0 right-0 h-3 w-3 bg-gray-400 border-2 border-white rounded-full"></div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatars with status indicators showing online, away, and offline states.",
      },
    },
  },
};
