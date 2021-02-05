import Head from "next/head";
import Layout from "./../components/layout";
import React, { useEffect, useState } from "react";

export default function Faqs() {
  useEffect(() => {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  });
  return (
    <>
      <Layout>
        <Head>
          <title>FAQs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <h1 className="title-style">Frequently Asked Questions</h1>
          <div className="mt-12 mb-48">
            <button class="accordion">
              What kind of complaints does the Gender Cell address?
            </button>
            <div class="panel">
              <div>
                <p>
                  The Gender Cell inquires into complaints of sexual harassment.
                  Sexual harassment includes any one or more of the following
                  unwelcome acts or behavior -
                </p>
                <br />
                <ol className="list-decimal pl-4">
                  <li>Physical contact and advances</li>
                  <li>A demand or request for sexual favors</li>
                  <li>Making sexually colored remarks</li>
                  <li>
                    Sending, displaying, or showing pornographic material in
                    physical form or through any electronic media
                  </li>
                  <li>
                    Any other unwelcome physical, verbal or non-verbal conduct
                    of sexual nature
                  </li>
                  <li>
                    Any other acts or omissions that are of like nature to the
                    instances above.
                  </li>
                </ol>
              </div>
            </div>

            <button class="accordion">
              Who can contact Gender Cell for help?
            </button>
            <div class="panel">
              <p>
                Any student, faculty, staff member or a service provider who is
                associated with IIITB may contact the Gender Cell
              </p>
            </div>

            <button class="accordion">
              I am scared to approach Gender Cell for help because of the fear
              of my name becoming public. What should I do?
            </button>
            <div class="panel">
              <p>
                Utmost priority is given to confidentiality in the Gender Cell.
                All the details and identities are kept confidential during and
                after the process.
              </p>
            </div>

            <button class="accordion">
              I am dealing with an issue that is related to gender but it does
              not come under sexual harassment. Can I still ask Gender Cell for
              help?
            </button>
            <div class="panel">
              <p>
                Yes. You can always contact Gender Cell for help. If we can’t
                help you, we will suggest where you can get help.
              </p>
            </div>

            <button class="accordion">
              I don’t know the person who misbehaved with me. What should I do
              in that case?
            </button>
            <div class="panel">
              <p>
                You may still approach us, but usually, it is essential to
                identify the accused person. For example - if a person is
                harassing you via sending vulgar pictures and texts from random
                IDs, you should have screenshots of the chats and discussion. In
                any instance of abuse by a person whose identity is not known,
                the Gender Cell with the help of other institute bodies will
                make efforts to identify the person to the extent possible.
              </p>
            </div>

            <button class="accordion">
              Is the Gender Cell the same as the Women’s Cell?
            </button>
            <div class="panel">
              <p>
                With the enactment of the Institute's policy on sexual
                harassment, the Women’s cell has been renamed the Gender Cell.
                The cell seeks to address complaints of all students, regardless
                of their gender.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
