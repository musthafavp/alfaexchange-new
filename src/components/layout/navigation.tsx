"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useTranslations } from "next-intl";



export function Navigation() {
  const t = useTranslations("common");

  return (
    <NavigationMenu className="lg:inline hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t("home")}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger> {t("about")}</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">    {t("about")}</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    {t("about-description")}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <div className="h-full flex row-span-4 flex-col justify-center">
                <ListItem href="/vision-and-mission" title= {t("mission")}></ListItem>
                <ListItem href="/management" title= {t("management")}></ListItem>
                <ListItem href="/what-we-do" title= {t("what-we-do")}></ListItem>
                <ListItem href="/corporate-profile" title= {t("profile")}></ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("services")}</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[550px] lg:grid-cols-[1fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                    {t("services")}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    {t("service-description")}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <div className="h-full flex row-span-4 flex-col justify-center">
                <ListItem href="/foreign-exchange" title= {t("forign")}></ListItem>
                <ListItem href="/home-remittance" title= {t("remit")}></ListItem>
                <ListItem href="/commercial-remittance" title= {t("commercial")}></ListItem>

                <ListItem href="/docs/fcy.pdf"  target="_blank" title= {t("kff")}></ListItem>
                <ListItem
                 href="/docs/remit.pdf"
                  title= {t("kft")}
                  target="_blank"
                ></ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("contact")}</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[550px] lg:grid-cols-[1fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                    {t("contact")}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    {t("contact-description")}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <div className="h-full flex row-span-4 flex-col justify-center">
                <ListItem href="/contact" title= {t("contact")}></ListItem>
                <ListItem href="/complaints-and-feedback" title= {t("conplaints")}></ListItem>
                <ListItem href="/online-survey" title= {t("survey")}></ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/news-and-announcement" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t("news")}{" "}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href="https://www.alfaexchange.org/RATE/Currency_form.aspx" target="_blank" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t("exchange")}{" "}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none  rounded-md  leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
