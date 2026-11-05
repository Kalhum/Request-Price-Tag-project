
import Link from "next/link";
import {
  House,
  Folder,
  CirclePlus,
  Printer,
  Tags,
  ChartColumn,
} from "lucide-react";

const menuItems = [
  {
    label: "home",
    href: "/",
    icon: House,
  },
  {
    label: "Manage Category",
    href: "/manage_category",
    icon: Folder,
  },
  {
    label: "Create Request",
    href: "/create_request",
    icon: CirclePlus,
  },
  {
    label: "Printing Request",
    href: "/printing_request",
    icon: Printer,
    active: true,
  },
  {
    label: "Printing Category",
    href: "/printing_category",
    icon: Tags,
  },
  {
    label: "Report and Reprint",
    href: "/report",
    icon: ChartColumn,
  },
];

export default function Topbar() {
  return (
    <nav className="   sticky top-0 z-50   flex min-h-[72px] shrink-0 items-center justify-center gap-2 border-b border-slate-200 bg-white px-layout shadow-card  ">

      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`
              inline-flex shrink-0 items-center gap-1.5
              rounded-panel px-3 py-3
              text-label font-semibold
              transition
              ${
                item.active
                  ? "bg-primary text-white shadow-card"
                  : "text-primary hover:bg-secondary hover:text-white"
              }
            `}
          >
            <Icon size={18} strokeWidth={1.8} />
            {item.label}
          </Link>
        );
      })}

    </nav>
  );
}
