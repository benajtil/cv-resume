import React, { useState, forwardRef, useRef, useEffect } from "react";
import {
  FaCheck,
  FaUser,
  FaBirthdayCake,
  FaHome,
  FaGlobe,
  FaDownload,
} from "react-icons/fa";
import { about, person } from "../constants";
import { logos } from "../constants";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Slide,
} from "@mui/material";
import resumePdf from "../assets/CV.pdf";

export default function About() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const scopes = about.bio.scopes;
  const half = Math.ceil(scopes.length / 2);
  const leftColumn = scopes.slice(0, half);
  const rightColumn = scopes.slice(half);

  const looped = React.useMemo(() => [...logos, ...logos], []);

  const scroller = useRef(null);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    el.scrollLeft = 0.1;

    let rafId;
    const speed = 0.5;

    const tick = () => {
      el.scrollLeft += speed;

      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft -= el.scrollWidth / 2;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="w-full bg-white pt-16 pb-16 overflow-hidden">
      {}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-extrabold">BIO</h1>
      </div>

      {}
      <div className="flex items-center justify-center mb-16">
        <div className="h-px w-24 bg-gray-300" />
        <div className="flex items-center mx-4 gap-2">
          <div className="w-10 h-[2px] bg-gray-300 rotate-45" />
          <div className="w-3 h-3 bg-gray-300 rotate-45" />
          <div className="w-10 h-[2px] bg-gray-300 rotate-45" />
        </div>
        <div className="h-px w-24 bg-gray-300" />
      </div>
      {}
      <div className="flex items-center justify-center pb-5 text-2xl font-semibold">
        <h1>PROGRAMMING LANGUAGES AND UTILITIES</h1>
      </div>
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden py-8">
        {}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
        {}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />

        <div
          ref={scroller}
          className="flex flex-nowrap overflow-hidden scrollbar-none "
        >
          {looped.map((src, i) => (
            <div key={i} className="flex-shrink-0 w-24 h-24 px-2 marquee-track">
              <img src={src} alt="" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
      {}
      <div className="container mx-auto px-6 md:px-8 md:pl-20 flex flex-col md:flex-row gap-12">
        {}
        <div className="flex-1 space-y-12">
          {}
          <div>
            <h2 className="text-2xl font-semibold mb-4">OVERVIEW</h2>
            <p className="text-[15px] leading-relaxed max-w-4xl text-justify">
              {about.bio.objective}
            </p>
          </div>

          {}
          <div>
            <h2 className="text-2xl font-semibold mb-4">SCOPES</h2>
            <div className="flex gap-20 mx-4 max-w-4xl">
              <ul className="space-y-3">
                {leftColumn.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-green-500" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {rightColumn.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-green-500" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {}
          <div className="text-2xl font-semibold">
            <h2>ABOUT ME</h2>
            <p className="text-[15px] max-w-4xl text-justify leading-7 font-normal mt-5 whitespace-pre-line">
              {about.bio.aboutme}
            </p>
          </div>
        </div>

        {}
        <div>
          <div className="relative w-64 h-64 overflow-hidden mx-auto group mr-40">
            {}
            <img
              src={person.photo.img}
              alt={person.name}
              className="w-full h-full object-cover photo-transition"
            />
            {}
            <img
              src={person.photo.border}
              alt=""
              className=" pointer-events-none
            absolute inset-0 w-full h-full object-cover
            opacity-0
            group-hover:opacity-100
            transition-opacity delay-1000 duration-1000 ease-in-out"
            />
          </div>
          {}
          <div className="p-6 mr-5 ">
            <ul className="divide-y divide-gray-200 text-sm text-gray-700">
              <li className="flex items-center py-3 ">
                <FaUser className="text-green-500 w-5 h-5 mr-3" />
                <span className="font-medium w-28">Name:</span>
                <span>
                  {person.name.fname} {person.name.lname}
                </span>
              </li>

              <li className="flex items-center py-3">
                <FaBirthdayCake className="text-green-500 w-5 h-5 mr-3" />
                <span className="font-medium w-28">Birth:</span>
                <span>{person.bio.birth}</span>
              </li>

              <li className="flex items-center py-3">
                <FaHome className="text-green-500 w-5 h-5 mr-3" />
                <span className="font-medium w-28">Location:</span>
                <span>{person.bio.location.loc}</span>
              </li>

              <li className="flex items-center py-3">
                <FaGlobe className="text-green-500 w-5 h-5 mr-3" />
                <span className="font-medium w-28">Citizenship:</span>
                <span>{person.bio.citizenship}</span>
              </li>
            </ul>
          </div>
          {}
          <>
            <div className="flex justify-center pr-30">
              <div
                className="mx-auto transition-transform duration-100 ease-in-out hover:scale-105 cursor-pointer hover:bg-green-200 hover:rounded-3xl"
                onClick={handleClickOpen}
              >
                <div className="border-2 border-green-500 rounded-4xl flex items-center justify-center h-10 w-40">
                  <span className="font-semibold">RESUME</span>
                  <FaDownload className="text-green-500 w-5 h-5 ml-2" />
                </div>
              </div>
              <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                maxWidth="lg"
                fullWidth
              >
                <DialogTitle>My Resume</DialogTitle>
                <DialogContent dividers>
                  {}
                  <iframe
                    src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=0`}
                    title="Resume PDF"
                    style={{
                      width: "100%",
                      height: "80vh",
                      border: "none",
                    }}
                  />
                </DialogContent>
                <DialogActions>
                  {}
                  <Button
                    component="a"
                    href={resumePdf}
                    download
                    color="primary"
                    startIcon={<FaDownload />}
                  >
                    Download
                  </Button>
                  <Button onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
              </Dialog>
            </div>
          </>
        </div>
      </div>
    </section>
  );
}
