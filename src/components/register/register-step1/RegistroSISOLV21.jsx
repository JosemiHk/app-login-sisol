"use client";
import * as React from "react";
import styles from "./RegistroSISOLV21.module.css";

function RegistroSISOLV21() {
  return (
    <div className={styles.container}>
      <div className={styles.phoneHeader}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ce35baca3ee54daaa7e8fdaa65a3fc61/c6b2cea1d8de392d27935e964c2ec12b0415330b?placeholderIfAbsent=true"
          className={styles.phoneIcon}
          alt="Phone icon"
        />
        <div className={styles.phoneNumber}>(01) 4671684</div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.stepContainer}>
            <div className={styles.leftColumn}>
              <div className={styles.stepsWrapper}>
                <div className={styles.stepGroup}>
                  <div className={styles.stepItem}>
                    <div className={styles.stepNumberActive}>1</div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/ce35baca3ee54daaa7e8fdaa65a3fc61/237ad6c183f202885564a15417bd3a1a2d71c3a7?placeholderIfAbsent=true"
                      className={styles.stepConnector}
                      alt=""
                    />
                  </div>
                  <div className={styles.stepLabelActive}>Registro de DNI</div>
                </div>

                <div className={styles.stepGroup}>
                  <div className={styles.stepVertical}>
                    <div className={styles.stepNumberInactive}>2</div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/ce35baca3ee54daaa7e8fdaa65a3fc61/9364d52178f6cd9ba7befaebf494a87a44c710e6?placeholderIfAbsent=true"
                      className={styles.stepConnector}
                      alt=""
                    />
                    <div className={styles.stepNumberInactive}>3</div>
                  </div>
                  <div className={styles.stepLabelsVertical}>
                    <div className={styles.stepLabel}>Datos Personales</div>
                    <div className={styles.stepLabelSecurity}>Seguridad</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.rightColumn}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ce35baca3ee54daaa7e8fdaa65a3fc61/46ae65d283316d12aab911f35abdba3c3d3d653c?placeholderIfAbsent=true"
                className={styles.formImage}
                alt="Registration form"
              />
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          Copyright © 2025 Sistema Metropolitano de la Solidaridad{" "}
        </div>
      </div>
    </div>
  );
}

export default RegistroSISOLV21;
