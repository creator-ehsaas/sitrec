"use client";
import React from "react";
import sitLogo from "../../assets/sit_logo.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";

export default function Event() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/">NAAC</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/event">Events</Link>
      </Typography>
    </ul>
  );
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: React.SetStateAction<number>) =>
    setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="max-h-[768px] w-full">
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <div className="flex items-center gap-4">
              <img
                src={sitLogo.src}
                alt="SIT Logo"
                className="mr-4 hidden lg:block h-10"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Sign in</span>
              </Button>
            </div>
          </MobileNav>
        </Navbar>
      </div>
      <div className="flex flex-row mx-8 my-8">
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://media.licdn.com/dms/image/D4D22AQFIL9S8Es4WJg/feedshare-shrink_2048_1536/0/1699093452501?e=1704931200&v=beta&t=Ja91vKfk5UWVKX02YyX4ibKWI3yLu8lM4u7UYRJedjI"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Entrepreneurship Meet 1.0
            </Typography>
            <Typography>
              In the event, MOU has been signed between TiE Nagpur (Nitin
              Sachdeva, President TIE Nagpur (MD delaPlex) and SIT, Nagpur (on
              behalf of SIU, Nagpur campus).
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
