import React from "react";
import "../styles/Body.css";

const year = "sp23";

const links = {
  disc: "https://cs61a.org/disc/",
  lab: "https://cs61a.org/lab/",
  slides: `https://slides.aditbala.com/${year}/`,
  attendanceDisc: "https://links.aditbala.com/disc",
  attendanceLab: "https://links.aditbala.com/lab",
};

const skip = ["00", "03"];

export default function Content({ num, labTitle, discTitle, attend, sol }) {
  return (
    <>
      {attend[0] && (
        <div className="wrapper">
          <p className="week">
            Lab {num}: {labTitle}
          </p>
          {!skip.includes(num) && (
            <a
              href={links.attendanceLab + `${num}`}
              target="_blank"
              className="button slides"
              rel="noreferrer"
            >
              {" "}
              attendance{" "}
            </a>
          )}

          <a
            href={links.lab + `lab${num}`}
            target="_blank"
            className="button slides"
            rel="noreferrer"
          >
            assignment{" "}
          </a>
          {sol[0] && (
            <a
              href={links.lab + `sol-lab${num}`}
              target="_blank"
              className="button slides"
              rel="noreferrer"
            >
              {" "}
              solution{" "}
            </a>
          )}
        </div>
      )}
      {attend[1] && (
        <div className="wrapper">
          <p className="week">
            {" "}
            Disc {num}: {discTitle}{" "}
          </p>

          <a
            href={links.attendanceDisc + `${num}`}
            target="_blank"
            className="button slides"
            rel="noreferrer"
          >
            {" "}
            attendance{" "}
          </a>

          <a
            href={links.disc + `disc${num}`}
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            {" "}
            assignment{" "}
          </a>
          {sol[1] && (
            <a
              href={links.disc + `sol-disc${num}`}
              target="_blank"
              className="button slides"
              rel="noreferrer"
            >
              {" "}
              solution{" "}
            </a>
          )}
        </div>
      )}
      <div className="wrapper">
        <p className="week"> slides {num}: </p>
        <a
          href={links.slides + `disc${num} `}
          target="_blank"
          className="button slides"
          rel="noreferrer"
        >
          html
        </a>
        <a
          href={links.slides + `disc${num}.pdf`}
          target="_blank"
          className="button slides"
          rel="noreferrer"
        >
          pdf
        </a>
      </div>
      <br></br>
    </>
  );
}
