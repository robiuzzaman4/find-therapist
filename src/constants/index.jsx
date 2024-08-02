import {
  Cog6ToothIcon,
  DocumentTextIcon,
  HeartIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const routeLinks = [
  {
    label: "Home",
    href: "/dashboard",
    icon: <Squares2X2Icon className="size-[18px]" />,
  },
  {
    label: "New Listing",
    href: "/dashboard/new-listing",
    icon: <UsersIcon className="size-[18px]" />,
  },
  {
    label: "Search",
    href: "/dashboard/search",
    icon: <MagnifyingGlassIcon className="size-[18px]" />,
  },
  {
    label: "About",
    href: "/dashboard/about",
    icon: <DocumentTextIcon className="size-[18px]" />,
  },
  {
    label: "Favourites",
    href: "/dashboard/favourites",
    icon: <HeartIcon className="size-[18px]" />,
  },
];

export const systemLinks = [
  {
    label: "Help Center",
    href: "/dashboard/help-center",
    icon: <InformationCircleIcon className="size-[18px]" />,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: <Cog6ToothIcon className="size-[18px]" />,
  },
];
