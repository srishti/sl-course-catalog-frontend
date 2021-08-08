import React from "react";
import Header from "../../components/Layout/Header/Header";
import Input from "../../components/UI/Input/Input";
import Dropdown from "../../components/UI/Dropdown/Dropdown";
import Button from "../../components/UI/Button/Button";
import * as utilsHelpers from "../../utils/helpers";
import styles from "./Checkout.module.css";

const Checkout = () => {
  console.log(utilsHelpers.getAllMonthsInYear());
  return (
    <>
      <Header />
      <main className={styles["checkout"]}>
        <div>
          <h2>Debit / Credit Card Details</h2>
          <div
            className={`${styles["card-number-cvv"]} ${styles["checkout-form-field"]}`}
          >
            <Input
              label="Card Number"
              input={{ id: "card-number", type: "text" }}
            />
            <Input label="CVV" input={{ id: "cvv", type: "text" }} />
          </div>
          <Input
            className={styles["checkout-form-field"]}
            label="Name on Card"
            input={{ id: "name-on-card", type: "text" }}
          />
          <div className={styles["checkout-form-field"]}>
            <div className={styles["card-validity"]}>
              <Dropdown
                label="Valid Till Month"
                dropdown={{ id: "month", name: "month" }}
                items={utilsHelpers.getAllMonthsInYear()}
              />
              <Dropdown
                label="Valid Till Year"
                dropdown={{ id: "year", name: "year" }}
                items={utilsHelpers.getDefaultYears()}
              />
            </div>
          </div>
          <Button secondary>Go to Payment</Button>
        </div>
      </main>
    </>
  );
};

export default Checkout;
