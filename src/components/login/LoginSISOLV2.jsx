
import React, { useState } from "react";
import styles from "./LoginSISOLV2.module.css";

function LoginSISOLV2() {
  const [activeTab, setActiveTab] = useState("login");  
  const [documentType, setDocumentType] = useState("DNI");
  const [documentNumber, setDocumentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.loginContainer}>
      <div className={styles.mainContent}>
        <div className={styles.imageColumn}>
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Login illustration"
            className={styles.loginImage}
          />
        </div>
        <div className={styles.formColumn}>
          <div className={styles.formWrapper}>
            <div className={styles.phoneHeader}>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23eb4335' viewBox='0 0 24 24'%3E%3Cpath d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/%3E%3C/svg%3E"
                alt="Phone icon"
                className={styles.phoneIcon}
              />
              <div className={styles.phoneNumber}>(01) 4671684</div>
            </div>

            <div className={styles.tabContainer}>
              <button
                className={`${styles.tab} ${activeTab === "login" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("login")}
              >
                Iniciar sesión
              </button>
              <button
                className={`${styles.tab} ${activeTab === "register" ? styles.inactiveTab : ""}`}
                onClick={() => setActiveTab("register")}
              >
                Registrarse
              </button>
            </div>

            <div className={styles.registerPrompt}>
              <span className={styles.registerText}>
                Si todavía no tienes una cuenta
              </span>
              <span className={styles.registerLink}>¡Regístrate aquí!</span>
            </div>

            <form className={styles.loginForm}>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Tipo de documento</label>
                <div className={styles.selectWrapper}>
                  <select
                    value={documentType}
                    onChange={(e) => setDocumentType(e.target.value)}
                    className={styles.selectField}
                  >
                    <option value="DNI">DNI</option>
                    <option value="DNI">Carné de extranjería</option>
                  </select>
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23565759' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E"
                    alt="Dropdown arrow"
                    className={styles.dropdownIcon}
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Número de documento</label>
                <input
                  type="text"
                  value={documentNumber}
                  onChange={(e) => setDocumentNumber(e.target.value)}
                  placeholder="Ingrese su número de documento"
                  className={styles.inputField}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Contraseña</label>
                <div className={styles.passwordWrapper}>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingrese su contraseña SISOL"
                    className={styles.passwordField}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={styles.passwordToggle}
                  >
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23565759' viewBox='0 0 24 24'%3E%3Cpath d='M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'/%3E%3C/svg%3E"
                      alt="Toggle password visibility"
                      className={styles.passwordIcon}
                    />
                  </button>
                </div>
              </div>

              <div className={styles.formOptions}>
                <label className={styles.checkboxWrapper}>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className={styles.checkbox}
                  />
                  <span className={styles.checkboxLabel}>Recordarme</span>
                </label>
                <button type="button" className={styles.forgotPassword}>
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              <button type="submit" className={styles.loginButton}>
                INICIAR SESIÓN
              </button>
            </form>

            <div className={styles.copyright}>
              Copyright © 2025 Sistema Metropolitano de la Solidaridad
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSISOLV2;
