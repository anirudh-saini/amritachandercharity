import { React, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./donate.module.scss";
import axios from "axios";
export const Donate = () => {
  const [isExpandedp1, setIsExpandedp1] = useState(false);

  const toggleReadMorep1 = () => {
    setIsExpandedp1(!isExpandedp1);
  };
  const [isExpandedp2, setIsExpandedp2] = useState(false);
  const toggleReadMorep2 = () => {
    setIsExpandedp2(!isExpandedp2);
  };
  const [message, setMessage] = useState(
    "₹1000 helps provide essential school supplies."
  );
  const [isEligible, setIsEligible] = useState(true);
  const amounts = {
    1000: "₹1000 helps provide essential school supplies.",
    2000: "₹2000 ensures nutrition for a child for a month.",
    4000: "₹4000 supports a child's education for a semester.",
    10000: "₹10000 supports a child's education for a semester.",
  };

  const handleAmountChange = (amount, setFieldValue) => {
    console.log(amount);
    if (amount === "custom") {
      setFieldValue("customamount", "custom");
      setMessage("Enter a custom donation amount.");
    } else if (amounts[amount]) {
      setFieldValue("customamount", "");
      setMessage(amounts[amount]);
    } else {
      setMessage("Thank you for your donation!");
    }
  };

  const fetchCityState = async (pincode, setFieldValue) => {
    if (!pincode || pincode.length !== 6) return;

    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const data = response.data[0];

      if (data.Status === "Success") {
        const { District: city, State: state } = data.PostOffice[0];
        setFieldValue("city", city);
        setFieldValue("state", state);
      } else {
        alert("Invalid Pincode");
        setFieldValue("city", "");
        setFieldValue("state", "");
      }
    } catch (error) {
      alert("Error fetching city and state");
      setFieldValue("city", "");
      setFieldValue("state", "");
    }
  };

  const validationSchema = Yup.object({
    terms: Yup.boolean()
      .oneOf([true], "Checkbox should be checked before continuing.")
      .required("Required"),

    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    mobile: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Invalid mobile number")
      .required("Mobile number is required"),
    address: Yup.string().required("Address is required"),
    pincode: Yup.string()
      .matches(/^\d{6}$/, "Invalid pincode")
      .required("Pincode is required"),
    pan: Yup.string().matches(/^[A-Z]{5}\d{4}[A-Z]$/, "Invalid PAN number"),
    amount: Yup.number()
      .typeError("Amount must be a number")
      .required("Please select an amount")
      .max(10000000, "Amount cannot exceed ₹10,000,000"),
    dateOfBirth: Yup.date()
      .required("Date of Birth is required")
      .test("age", "You must be at least 18 years old to donate", (value) => {
        const today = new Date();
        const birthDate = new Date(value);
        const age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (
          month < 0 ||
          (month === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }
        // Check if the user is 18 or older
        const eligible = age >= 18;
        setIsEligible(eligible); // Set eligibility status
        return eligible;
      }),
  });
  const minDate = "1900-01-01"; // Fixed minimum date of 1900
  const today = new Date();
  const maxDate = new Date(today.setFullYear(today.getFullYear() - 18))
    .toISOString()
    .split("T")[0];
  return (
    <>
      <div className={styles.donate}>
        <h1>Donate and Save Tax</h1>
      </div>
      <div className={`container ${styles.content}`}>
        <div className={styles.para}>
          <div>
            <img src="/donate.jpg" alt="" />
          </div>
          <div>
            <p>
              India has been ranked at 111th position out 125 countries in
              global hunger index 2023 Jointly Published by Concern Worldwide
              and Welthungerhilfe. It shows that there are a lot more people
              special children out there whose days are going empty stomach. It
              is not just about providing a meal to the needy; it is about
              offering a wholesome, nutritious meal to those individuals who are
              struggling to access even the basic necessities of life. Our
              mission is to make a significant impact on the lives of those
              affected by food insecurity.
            </p>
            <p>
              As an NGO dedicated to making a difference in the lives of those
              suffering from hunger, we must continue to step up and address
              this issue head-on. Together, we can create a brighter, more
              nourished future for the vulnerable individuals we aim to support.
            </p>
            <p>
              Your commitment to our cause and your unwavering dedication to
              providing wholesome meals to those in need is the driving force
              behind our mission. Let us, as a team, strive to alleviate hunger
              and malnutrition by ensuring that no one goes to bed with an empty
              stomach.
            </p>
            <p>
              We at Amrita chander charitable are trying very hard to meet up
              the food need of these people help us and feed someone today by
              helping us
            </p>
            <p>You can directly pay in our bank as well</p>
            <ul>
              <li>Bank Details</li>
              <li>AMRITA CHANDER JANKALYAN CHARITABLE TRUST</li>
              <li>Bank-AU Small Finance Bank</li>
              <li>A/c No.- 2281248042303624</li>
              <li>IFSC-AUBL0002480</li>
            </ul>
          </div>
        </div>
        <div>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              mobile: "",
              address: "",
              pincode: "",
              pan: "",
              amount: "1000",
              customamount: "",
              city: "",
              state: "",
              country: "India",
              terms: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              alert(`Donation Successful: ${JSON.stringify(values, null, 2)}`);
            }}
          >
            {({ values, setFieldValue, placeholder }) => (
              <Form className={styles.donation_form}>
                <div className={styles.form_1}>
                  <h2>Donate and Save Tax</h2>
                  <div>
                    <p>
                      <img src="/amount.svg" />
                      Choose an amount donate
                    </p>
                    <div>
                      <label className={styles.label}>
                        <Field
                          type="radio"
                          name="amount"
                          value="1000"
                          onClick={() =>
                            handleAmountChange(1000, setFieldValue)
                          }
                          checked={values.amount === "1000"}
                        />
                        <span className={styles.radio}>₹1000</span>
                      </label>
                      <label className={styles.label}>
                        <Field
                          type="radio"
                          name="amount"
                          value="2000"
                          onClick={() =>
                            handleAmountChange(2000, setFieldValue)
                          }
                        />
                        <span className={styles.radio}>₹2000</span>
                      </label>
                    </div>

                    {message && <p className={styles.message}>{message}</p>}
                    <div>
                      <label className={styles.label}>
                        <Field
                          type="radio"
                          name="amount"
                          value="4000"
                          onClick={() =>
                            handleAmountChange(4000, setFieldValue)
                          }
                        />
                        <span className={styles.radio}>₹4000</span>
                      </label>
                      <label className={styles.label}>
                        <Field
                          type="radio"
                          name="amount"
                          value="10000"
                          onClick={() =>
                            handleAmountChange(10000, setFieldValue)
                          }
                        />
                        <span className={styles.radio}>₹10000</span>
                      </label>
                    </div>

                    <label className={styles.custom}>
                      <Field
                        type="radio"
                        name="amount"
                        value="custom"
                        checked={values.customamount === "custom"}
                      />
                      <Field
                        type="text"
                        name="customAmount"
                        min="0"
                        max="10000000"
                        onFocus={() => {
                          setFieldValue("customamount", "custom");
                          handleAmountChange("custom", setFieldValue);
                        }}
                        placeholder="₹ Other Amount"
                        onChange={(e) => {
                          const value = e.target.value;
                          setFieldValue("amount", value);
                          if (value > 10000000 && value > 0) {
                            setMessage(
                              "Amount cannot exceed ₹10,000,000 and amount cannot be 0"
                            );
                          } else {
                            setMessage("Enter a custom donation amount.");
                          }
                        }}
                      />
                      <ErrorMessage
                        name="amount"
                        component="div"
                        className={styles.error}
                      />
                    </label>
                  </div>
                </div>
                <div className={styles.form_2}>
                  <p>Special characters not allowed in full name</p>
                  <div>
                    <div className={`${styles.input} ${styles.full_name}`}>
                      <Field type="text" name="fullName" placeholder="  " />
                      <label
                        htmlFor="fullName"
                        className={values.fullName ? styles.floating : ""}
                      >
                        Full Name
                      </label>
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className={styles.error}
                      />
                    </div>
                    <div className={`${styles.input} ${styles.date_of_birth}`}>
                      <Field
                        type="date"
                        name="dateOfBirth"
                        min={minDate}
                        max={maxDate}
                        placeholder="  "
                      />
                      <label className={styles.floating}>Date of Birth</label>
                      <ErrorMessage
                        className={styles.error}
                        name="fullName"
                        component="div"
                      />
                    </div>
                  </div>
                  <div>
                    <div className={styles.input}>
                      <Field type="email" name="email" placeholder="  " />
                      <label className={values.fullName ? styles.floating : ""}>
                        Email
                      </label>
                      <ErrorMessage
                        className={styles.error}
                        name="email"
                        component="div"
                      />
                    </div>

                    <div className={styles.input}>
                      <Field type="text" name="mobile" />
                      <label className={values.fullName ? styles.floating : ""}>
                        Mobile Number
                      </label>
                      <ErrorMessage
                        className={styles.error}
                        name="mobile"
                        component="div"
                      />
                    </div>
                  </div>

                  <div className={styles.input}>
                    <Field type="text" name="address" />
                    <label className={values.fullName ? styles.floating : ""}>
                      Address
                    </label>
                    <ErrorMessage
                      className={styles.error}
                      name="address"
                      component="div"
                    />
                  </div>
                  <p>Entering Pincode will autofill City and State </p>
                  <div>
                    <div className={styles.input}>
                      <Field
                        type="text"
                        name="pincode"
                        onBlur={(e) =>
                          fetchCityState(e.target.value, setFieldValue)
                        }
                      />
                      <label className={values.fullName ? styles.floating : ""}>
                        Pincode
                      </label>
                      <ErrorMessage
                        className={styles.error}
                        name="pincode"
                        component="div"
                      />
                    </div>

                    <div className={styles.input}>
                      <Field type="text" name="city" readOnly />
                      <label className={values.fullName ? styles.floating : ""}>
                        City
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className={styles.input}>
                      <Field type="text" name="state" readOnly />
                      <label className={values.fullName ? styles.floating : ""}>
                        State
                      </label>
                    </div>

                    <div className={styles.input}>
                      <Field type="text" name="country" readOnly />
                      <label className={styles.floating}>Country</label>
                    </div>
                  </div>

                  <div className={styles.input}>
                    <Field type="text" name="pan" />
                    <label className={values.fullName ? styles.floating : ""}>
                      PAN Number
                    </label>
                    <ErrorMessage
                      className={styles.error}
                      name="pan"
                      component="div"
                    />
                  </div>
                  <p className={styles.pan}>
                    Please note that if you do not provide your PAN Number, you
                    will not be able to claim 50% tax exemption u/s 80G in India
                  </p>
                  <p>
                    Information is being collected to comply with government
                    regulations and shall be treated as confidential.
                    <span style={{ display: isExpandedp1 ? "none" : "inline" }}>
                      ...
                    </span>
                    <span style={{ display: isExpandedp1 ? "inline" : "none" }}>
                      These details shall not be divulged for any other purpose.
                      By sharing your details, you agree to receive stories and
                      updates from CRY via mobile, Whatsapp, landline, email and
                      post. If you&apos;d like to change this, please send us an
                      email on writetous@crymail.org
                    </span>
                    <span>
                      <button onClick={toggleReadMorep1}>
                        {isExpandedp1 ? "Read Less" : "Read More"}
                      </button>
                    </span>
                  </p>
                  <p>
                    <Field type="checkbox" name="terms" />I hereby declare that
                    I am a citizen of India, making this donation out of my own
                    funds. The information
                    <span style={{ display: isExpandedp2 ? "none" : "inline" }}>
                      ...
                    </span>
                    <span style={{ display: isExpandedp2 ? "inline" : "none" }}>
                      provided above is correct to the best of my knowledge. I
                      know that all further communications will be done on
                      contact details provided above
                    </span>
                    <span>
                      <button onClick={toggleReadMorep2}>
                        {isExpandedp2 ? "Read Less" : "Read More"}
                      </button>
                    </span>
                  </p>
                  <ErrorMessage
                    name="terms"
                    component="div"
                    className={styles.error}
                  />
                  <button className={styles.submit} type="submit">Continue to Payment</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
