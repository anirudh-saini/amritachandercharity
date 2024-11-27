import React from "react";
import styles from "./privacy.module.scss";
export const Privacy = () => {
    return (
        <>
            <div className={styles.about}>
                <h1>Privacy Policy</h1>
            </div>
            <div className={`container ${styles.privacy}`}>
                <p>
                    Amrita Chander Jankalyan Charitable Trust is grateful to all
                    of its supporters including those who contribute time,
                    material and/or money to help us continue doing our work.
                    Amrita Chander Jankalyan Charitable Trust maintains strict
                    donor privacy policies to protect the integrity and privacy
                    of personal information gathered from our supporters and
                    visitors through all of our communication channels, as well
                    as from visitors to our website. Amrita Chander Jankalyan
                    Charitable Trust does not sell, exchange, or rent your
                    personal information to any organization or individual. We
                    will not divulge personal information to any other
                    organization or individual other than that necessary to
                    transact, fulfill, and/or account for online donations that
                    you have authorized.
                </p>
                <p>
                    Amrita Chander Jankalyan Charitable Trust will only use your
                    phone number and email address if we need to verify
                    information, thank you for your contribution, ask for your
                    opinion, request your assistance, or invite you to a special
                    event.
                </p>
                <h3>What information do we collect?</h3>
                <p>
                    When you make a donation, attend an event, or volunteer with
                    Amrita Chander Jankalyan Charitable Trust, we may ask for
                    information such as your name, address, email address, phone
                    number, and other relevant information. Amrita Chander
                    Jankalyan Charitable Trust uses cookies to facilitate
                    authentication and personalization across our web systems. A
                    cookie is a small amount of data that is sent to your Web
                    browser from a Web server and stored on your
                    computer&rsquo;s hard drive. Amrita Chander Jankalyan
                    Charitable Trust uses only anonymous information (such as IP
                    address) to track how our online visitors use our website.
                </p>
                <h3>How do we use your information?</h3>
                <ul>
                    <li>To process your donation</li>
                    <li>To send you a receipt for your donation</li>
                    <li>
                        To send you a thank-you note for your donation or
                        volunteering
                    </li>
                    <li>
                        To respond to your questions or comments about Amrita
                        Chander Jankalyan Charitable Trust
                    </li>
                    <li>
                        To send you additional information about our projects
                    </li>
                    <li>
                        To send you invitations for upcoming events that may
                        interest you
                    </li>
                </ul>
                <p>
                    Amrita Chander Jankalyan Charitable Trust uses
                    non-identifying basic information (aggregate data) to
                    analyze site use and to improve the content and design of
                    the site.
                </p>
                <p>
                    Our website has stringent security measures in place to
                    protect the loss, misuse, and alteration of the information
                    under our control. Amrita Chander Jankalyan Charitable Trust
                    will not use personal information in any way other than as
                    described under Terms &amp; Conditions. Exceptions to these
                    are limited to sharing personal information to cooperate
                    with law enforcement officials.
                </p>
                <div>
                    {" "}
                    <h3>Credit / Debit Card Security</h3>
                    <p>
                        Amrita Chander Jankalyan Charitable Trust is grateful
                        for the donations that help us continue our valuable
                        work. When you donate to Amrita Chander Jankalyan
                        Charitable Trust online, your card information is
                        secured; your credit card number is used only for that
                        particular transaction and is not stored. If you allow
                        us to store your credit card or bank information for
                        future use, such as recurring donations, such
                        information will be stored by the payment services
                        financial institution. Amrita Chander Jankalyan
                        Charitable Trust only uses financial institutions that
                        adhere to the industry standards for storing such
                        information.
                    </p>
                </div>

                <div>
                    {" "}
                    <h3>Is donation secure?</h3>
                    <p>
                        Absolutely. The security and confidentiality of your
                        information are our highest priority. We use
                        industry-standard SSL (secure socket layer) technology
                        to protect your information and provide a safe and
                        secure environment for online donations.
                    </p>
                </div>

                <div>
                    <h3>Is donation tax-deductible?</h3>
                    <p>
                        Yes, it is. All cash gifts to Amrita Chander Jankalyan
                        Charitable Trust are tax-deductible under 80G. Amrita
                        Chander Jankalyan Charitable Trust is also FCRA
                        certified to receive foreign currency funds. To claim
                        tax exemption, please keep the donation receipt as your
                        official record. A donation receipt will be sent to you
                        at the email address you provide while making donations,
                        as soon as your donation is processed.
                    </p>
                </div>
            </div>
        </>
    );
};
