import React from "react";
import Header from "../../components/Layout/Header/Header";
import Card from "../../components/UI/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import styles from "./Payment.module.css";

const Payment = () => {
  return (
    <>
      <Header />
      <main className={styles["payment"]}>
        <Card>
          <h3>
            <span className={styles["label-text"]}>Amount to Pay: </span>
            <FontAwesomeIcon icon={faRupeeSign} />
            <span>{(102.5).toFixed(2)}</span>
          </h3>
          <Input
            className={styles["payment-form-field"]}
            label="Enter 6-digit OTP:"
            input={{ type: "text" }}
          />
          <Button secondary>Pay</Button>
        </Card>
      </main>
    </>
  );
};

export default Payment;
