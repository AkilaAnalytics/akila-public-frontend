import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useMatches } from "react-router";
import { Triangle, akilaAnalyticsLogo } from "~/view/assets";
import { BookDemo } from "~/view/components";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  //

  const matches = useMatches();

  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const menuRef = useRef(null);

  function openSubMenu(index) {
    if (index === activeSubMenu) {
      return setActiveSubMenu(null);
    }
    setActiveSubMenu(index);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.className = "stop-scroll";
    } else {
      document.body.className = "";
      setActiveSubMenu(null);
    }
  }, [isOpen]);

  function renderMenus(menuList) {
    return menuList.map((items, index) => {
      return (
        <li key={items.name + index}>
          <div
            className="w-[fit-content] px-[24px] pb-[24px] text-[32px]"
            onClick={() => {
              if (items.submenu) {
                openSubMenu(index);
              } else {
                setIsOpen(false);
                setActiveSubMenu(null);
              }
            }}
          >
            <Link className="flex items-center" to={items.href && items.href}>
              <p
                className={`mr-1 pb-2 uppercase ${
                  index === activeSubMenu ? "border-b-[1px]" : ""
                } `}
              >
                {items.name}
              </p>
              {items.submenu && (
                <ChevronDownIcon
                  className={`  ml-1 h-[15px] w-[15px] transform ${
                    index === activeSubMenu && "rotate-180"
                  }`}
                />
              )}
            </Link>
          </div>
          {items.submenu && index === activeSubMenu && (
            <ul className="py-[8px]">
              {items.submenu?.map((item, index) => {
                return (
                  <li
                    key={item.name + index}
                    className={`my-[24px] px-[24px] text-xl text-slate-200 `}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveSubMenu(null);
                    }}
                  >
                    <Link to={item.href}> {item.name} </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      );
    });
  }

  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // sign in button
  //via-gray-periwinkleDark bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-periwinkle to-periwinkleDark  const location = useLocation()
  const location = useLocation();

  //console.log(location, '<<< location')
  const signInButton = () => {
    return (
      <div className="hidden gap-2 md:flex">
        <BookDemo />
        <a
          href={"/coming-soon"}
          target="_blank"
          rel="noreferrer"
          className="my-auto"
        >
          <button className="z-50 my-auto flex w-full items-center whitespace-nowrap rounded-md p-2 text-xs uppercase tracking-widest hover:scale-105 md:w-auto">
            Try Free
          </button>
        </a>
      </div>
    );
  };

  return (
    <nav
      className="w-full sticky top-0 z-[999] bg-black px-2 py-[22px] text-xs"
      ref={sidebarRef}
    >
      <div className="relative mx-auto flex w-10/12 items-center justify-between gap-2">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src={akilaAnalyticsLogo}
            alt="Akila Analytics logo"
            className="h-full w-full"
          />
        </Link>
        <div>
          <ul className="relative hidden items-center gap-[40px] lg:flex">
            {navigation.map((menu, index) =>
              menu.submenu ? (
                <li className="text-text_clr group group" key={menu.name}>
                  <span className={`flex cursor-pointer items-center `}>
                    <span className="text-xs uppercase">{menu.name}</span>
                    <ChevronDownIcon className="ml-1 inline h-[15px] w-[15px] transform group-hover:rotate-180" />
                  </span>
                  <div className="absolute top-[62px] hidden w-9 justify-center group-hover:flex">
                    <img
                      style={{ filter: "invert(100%)" }}
                      src={Triangle}
                      alt=""
                    />
                  </div>

                  <ul className="fixed left-[25%] hidden min-h-[140px] max-w-[1000px] transition duration-700 ease-in-out group-hover:flex">
                    <div className="mt-[50px] flex rounded-md bg-gradient-to-r from-[rgb(32,30,100)] to-[rgb(7,6,9)]">
                      <div className="flex min-h-full w-3/12 flex-col justify-center rounded-l-lg px-5 text-left">
                        <h5 className="uppercase leading-7">
                          Learn more about Akila
                        </h5>
                        <span className="text-gray-400">
                          Simplify your business analytics and data science.
                        </span>
                        <br />
                        <br />
                        <Link to="/talk-to-sales" className="uppercase">
                          <span>Talk to Sales</span>
                        </Link>
                        <Link to="/product/watch-demo" className="uppercase">
                          <span>Watch a Demo</span>
                        </Link>
                        <Link to="#" className="uppercase">
                          <span>Documentation</span>
                        </Link>
                      </div>
                      <div className="grid w-9/12 grid-cols-4 rounded-r-lg py-3 text-left">
                        {menu.submenu.map((subItems) => (
                          <Link
                            to={subItems.href}
                            key={subItems.href}
                            className="px-3 py-3"
                          >
                            <li className="cursor-pointer font-semibold uppercase tracking-[0.3px]">
                              {subItems.name}
                            </li>
                            <div className="mt-3 text-sm font-light">
                              {subItems.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </ul>

                  {/*  */}
                </li>
              ) : (
                <Link
                  to={menu.href}
                  key={index}
                  className={`${
                    matches[1]?.pathname === menu?.href ? "active" : ""
                  }  text-text_clr`}
                >
                  <li className="text-xs uppercase">{menu.name}</li>
                </Link>
              )
            )}
          </ul>
        </div>
        {signInButton()}
        <div className="lg:hidden">
          {isOpen ? (
            <XMarkIcon
              onClick={() => toggleSidebar()}
              className="h-[30px] w-[30px]"
            />
          ) : (
            <Bars3Icon
              onClick={() => toggleSidebar()}
              className="h-[30px] w-[30px]"
            />
          )}
        </div>
      </div>
      <div
        className={`fixed bottom-0 left-0 right-0 top-[70px] transform ${
          isOpen ? "translate-y-0" : "translate-y-[-1000px]"
        } bg-black lg:hidden`}
      >
        <div
          className={`h-full transform overflow-y-auto   ${
            isOpen ? "opacity-100 " : "opacity-0 "
          } transition-all  duration-1000  ease-in-out`}
        >
          <div className="flex h-full flex-col pt-[40px]">
            <ul ref={menuRef}>
              {renderMenus(navigation)}
              <BookDemo />
              <a href="/coming-soon" target="_blank" rel="noreferrer">
                <button className="z-50 mx-auto my-auto flex w-full items-center justify-center rounded-md p-2 text-center text-xs uppercase tracking-widest hover:scale-105 md:w-auto md:whitespace-nowrap">
                  Try Free
                </button>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

const navigation = [
  {
    name: "Platform",
    href: "#",
    current: true,
    submenu: [
      {
        name: "Overview",
        href: "/platform/overview",
        description: "Discover insights & trends in your data effortlessly",
      },
      {
        name: "Visualize Data",
        href: "/platform/visualize-data",
        description:
          "Akila outputs data to your preferred visualization tools.",
      },
      {
        name: "Integrate Data",
        href: "/platform/integrate-data",
        description:
          "Streamline data processing workflows to gain insights faster.",
      },
      {
        name: "Leverage The Cloud",
        href: "/platform/leverage-the-cloud",
        description: "We offer a range of cloud-based deployment options.",
      },
      {
        name: "End-to-end Solutions",
        href: "/platform/end-to-end-solutions",
        description:
          "Uncover the simplicity of data science with our end-to-end, no-code solutions.",
      },
      {
        name: "Governance",
        href: "/platform/governance",
        description:
          "Data governance and security have never been more important. Akila is here to make that process easier.",
      },
      {
        name: "Security",
        href: "/platform/security",
        description:
          "By deploying our infrastructure into your account, we help ensure that sensitive data remains secure.",
      },
      {
        name: "AI Business Solutions",
        href: "/platform/ai",
        description:
          "Learn how we can integrate AI into your workflows to automate workflows.",
      },
    ],
  },
  {
    name: "Product",
    href: "/",
    current: false,
    submenu: [
      {
        name: "Automated Reporting",
        href: "/product/automated-reporting",
        description: "Automate your workflows.",
      },
      {
        name: "Private LLM",
        href: "/product/private-llm",
        description: "Ensure your data and messages are private.",
      },
      {
        name: "AI Consulting",
        href: "/product/ai-consulting",
        description:
          "Take your business to the next level with bespoke solutions.",
      },
      {
        name: "Hardware",
        href: "/product/hardware",
        description: "Purchase servers directly from us.",
      },
      {
        name: "Try Free",
        href: "/product/try-free",
        description: "Sign up for our free trial.",
      },
    ],
  },
  {
    name: "Company",
    submenu: [
      {
        name: "Overview",
        href: "/company/overview",
        description:
          "Akila Analytics is a cutting-edge, no-code data science platform.",
      },
      {
        name: "Use Cases",
        href: "/enterprise/use-cases",
        description:
          "Scale your data analytics capabilities with ease and drive business growth.",
      },
      {
        name: "By Role",
        href: "/enterprise/by-role",
        description:
          "Build data solutions to help your team improve and expand how they work.",
      },
      {
        name: "Data Science",
        href: "/enterprise/data-science",
        description:
          "Akila’s full-stack, modern BI platform allows you to connect all your data and systems.",
      },
      {
        name: "Customer Profitability",
        href: "/use-cases/customer-profitability",
        description:
          "Learn how clients are leveraging Akila to drive profitability.",
      },
      {
        name: "Marketing Analytics",
        href: "/use-cases/marketing-analytics",
        description: "Identify key drivers and target markets in big data.",
      },
      {
        name: "Private Equity",
        href: "/use-cases/private-equity",
        description:
          "Explore how Akila is increasing efficiency during the due diligence process",
      },
    ],
  },
  {
    name: "Pricing",
    href: "/pricing",
    current: false,
  },
  {
    name: "Contact Us",
    href: "/contact-us",
    current: false,
  },
];
