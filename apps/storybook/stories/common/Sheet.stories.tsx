import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Label,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Sheet> = {
  title: "Common/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A sheet component that slides in from the edge of the screen, perfect for navigation menus, forms, and detailed views.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "Whether the sheet is open",
    },
    side: {
      control: { type: "radio" },
      options: ["top", "right", "bottom", "left"],
      description: "Side from which the sheet slides in",
    },
  },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: args => {
    const side = args.side ?? "right";

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent className="px-4" side={side}>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>This is a description of what this sheet contains.</SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="text-sm text-gray-600">
              Sheet content goes here. You can put any content you want in this area.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
    };

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button>Contact Us</Button>
        </SheetTrigger>
        <SheetContent className="px-4">
          <SheetHeader>
            <SheetTitle>Contact Form</SheetTitle>
            <SheetDescription>Send us a message and we'll get back to you soon.</SheetDescription>
          </SheetHeader>

          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                value={formData.message}
                onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              />
            </div>
          </form>

          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
            <Button type="submit" onClick={handleSubmit}>
              Send Message
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const UserProfile: Story = {
  render: () => {
    const [profile, setProfile] = useState({
      name: "John Doe",
      email: "john@example.com",
      bio: "Software developer passionate about creating great user experiences.",
      location: "San Francisco, CA",
    });

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="default" className="h-12 w-12 rounded-full">
            <Avatar>
              <AvatarImage src="/webriq-logo.png" alt="User avatar" />
              <AvatarFallback>BI</AvatarFallback>
            </Avatar>
          </Button>
        </SheetTrigger>
        <SheetContent className="px-4">
          <SheetHeader>
            <SheetTitle>Profile Settings</SheetTitle>
            <SheetDescription>Update your profile information</SheetDescription>
          </SheetHeader>

          <div className="py-4 space-y-6">
            <div className="flex items-center space-x-4">
              <img
                className="h-16 w-16 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
                alt="User avatar"
              />
              <Button variant="outline" size="sm">
                Change Photo
              </Button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="profile-name">Name</Label>
                <input
                  id="profile-name"
                  type="text"
                  value={profile.name}
                  onChange={e => setProfile(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile-email">Email</Label>
                <input
                  id="profile-email"
                  type="email"
                  value={profile.email}
                  onChange={e => setProfile(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile-bio">Bio</Label>
                <textarea
                  id="profile-bio"
                  value={profile.bio}
                  onChange={e => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile-location">Location</Label>
                <input
                  id="profile-location"
                  type="text"
                  value={profile.location}
                  onChange={e => setProfile(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
            <Button>Save Changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const ShoppingCart: Story = {
  render: () => {
    const [cartItems, setCartItems] = useState([
      { id: 1, name: "Wireless Headphones", price: 99.99, quantity: 1 },
      { id: 2, name: "Smartphone Case", price: 24.99, quantity: 2 },
      { id: 3, name: "USB Cable", price: 12.99, quantity: 1 },
    ]);

    const updateQuantity = (id: number, newQuantity: number) => {
      if (newQuantity === 0) {
        setCartItems(prev => prev.filter(item => item.id !== id));
      } else {
        setCartItems(prev =>
          prev.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item)),
        );
      }
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
              />
            </svg>
            Cart ({cartItems.length})
          </Button>
        </SheetTrigger>
        <SheetContent className="px-4">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
            <SheetDescription>Review your items before checkout</SheetDescription>
          </SheetHeader>

          <div className="py-4 space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 py-8">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-600">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          -
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          +
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Continue Shopping</Button>
            </SheetClose>
            <Button disabled={cartItems.length === 0}>Checkout</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const MobileMenu: Story = {
  render: () => (
    <div className="border-b bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="px-4">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="py-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-sm text-gray-900 uppercase tracking-wide">
                    Main
                  </h3>
                  <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                    Home
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                    About
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                    Services
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                    Contact
                  </a>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-sm text-gray-900 uppercase tracking-wide">
                    Account
                  </h3>
                  <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                    Profile
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                    Settings
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                    Billing
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <h1 className="text-xl font-semibold">My App</h1>
        </div>

        <Button variant="ghost" size="sm">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </Button>
      </div>
    </div>
  ),
};

export const ControlledSheet: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={() => setOpen(true)} disabled={open}>
            Open Sheet
          </Button>
          <Button onClick={() => setOpen(false)} disabled={!open} variant="outline">
            Close Sheet
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent className="px-4">
            <SheetHeader>
              <SheetTitle>Controlled Sheet</SheetTitle>
              <SheetDescription>This sheet's open state is controlled externally.</SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <p className="text-sm text-gray-600">
                You can control this sheet's visibility using the external buttons.
              </p>
            </div>
            <SheetFooter>
              <Button onClick={() => setOpen(false)}>Close from inside</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    );
  },
};
