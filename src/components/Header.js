import React, { useState } from "react";
import HeaderLinks from "./HeaderLinks";

function Header() {
  const [header, setHeader] = useState(false);

  function changeHeaderBack() {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  window.addEventListener("scroll", changeHeaderBack);
  return (
    <div className={header ? "header active" : "header"}>
      <div className="logo">
        <img
          src={
            header
              ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAApCAYAAAClfnCxAAAFYUlEQVRYhbXZd6hWZRwH8M8daWmmNsWGmLRtYtmi8hK0bdgkGn9UqA0KqYyIaNAfFVEWbSgpirRsL6JFAyyMKLMhWZptyyy7mrM/fufU8dwz3vde7xde3vf5nWd8n+f85vO2jDp8iRocjcuxM5ZjDmbiA3yI33L9d8FG+Khu4gL0wQScid3Qhi/xMKZgdbZzSw35O3BJzYKL8ANWYmiy2Dj83iTxLfAK9il5/gAuyAqqyB+PZ5ok8CAmio00gxa8jCMq+qzBEPyaClorOk9oYvG1mIzzNU+cIF1FnOC6fVbQXtF5JP7C10I1NsEIbJbrtxzn4onGuXbB6ZiFR3AhdijosxYLsoIq8pfhOfyTk28hjOmwZKET8W53GGewJ04WB/UEXhOHl8U0/JgVVKnNdF2JEzr3Ew7CgXpOnFC1r5PfP2EMnsSq5PMozssPqjr5ImyJ0bgBx+G7bpJNsQE2Fwa7DRbjb6GmpyT8WpTYUdXJE779Fnwq3sL7Qk0WYV4ivx27Nki2DWPxEOZiGZ4Xb/MLLBWq8TwuxuAy4pS7yiG4FWf4f4MPCz+bTnYVbsqMeRKT5IwqQSvOwTUYnpFPxD3J76F4y7rGugx34Ub82Qj5MXgs2UCKb0XkXJ6RtWN+smiKP3E2ns3IBiXzHZVb50vxZrMYmxubYi5OENH9P+TVZpyIckNy8vtyxAlDeiEn2wRP4dSkPQBvFxCHNwpkLwn3nMcOwgNtlRVmyY8WJ9SnZNIifF4gaxM6PRLXY4+SsfMKZKuEHRVhKK7NClJvMwCPKyb+Dz4rmXBRibwf7heqVoa/S+Q/VIzpyDZS8pOta0hZzJfL5jJYXLHQARXPKI4hsKJizIBsozURVGWOv1Y86wn6lcg3rBjzcbbRKoxr44oBVTnzsopndRhaIq/ick+20Y4jaxbZW+QVRdi8ZmzdvEXYpkR+r5x3a8deNYvMFDbRXRwrAt4GOXmHOP2sgQ7X1fcTJ95FtduVv74UKxW7tUYxRUTOK0Uc6ZvI+2CqSId/E6n2fdZ13+/hahEruqBdfX6zXTdJZ7FAeKZpeF1ko6NFKrww+QwWEfppkds/i9lVk7bjZwyr6DNSnFaZa6vD6IT0Suwk3O7UzPOW5LOm2YlbRf5chf7+D/fNogNvire3RnG8WKsbxAnyjVxRXCc20Qx2xwxxDULkJxc2OUclWkYdvuRovNhA36dFityI+gwTFVaR25stDPh7YQerRD6UYpBQo74ihZgv7ofmF5FvFyVYI4b5icjpZ5Y8b8Exwidv3cB8zWAWbpaJOWk+P14uetXgU1Gcfyv0eKAw7DFy1xO9gBk4C50p+TbxKg9eTwt8Ja5J2uo6dhPTcFrq41cLfV64HiZeIurc19bDXGU4FUdmA9RCHCpOrbv4Xej8HFyk3g33BOPz0XUe9hXF9tomJ3sP+yXfhBMYJS6RyuqBnuCwqovWvXApTpIrAjJYI1zinaJ2LdvwtrhbGPQs4Yk2Fbn7CuF+l6Iz+b2xMPx8MpfFirorbskE+4i7mS1FStEp1Gum8lIwRYfY3K4i/X61bsEEfUXhfoOuV38wtxHyPcHF4lKqVVRBZTl8FfqJFGO/nHxKXUbZE3SIPyfSNeZU9K1CJ67IyVbhrt4kP1lE3BRlNWsjmJVr34S5vUl+RK49RuQt3UE21Zgu7oNqC5Ge4J1ce6DI46tuB4rQIrJauE0E09X0LvkrxM1vFmOFChzf4NrDRCqwo3hzk2RiRm97m4GiBh2va6z4RXiR2SLdXS4Msb+ouPZP2lOTDXQpWHqbfIqNxB9mhwifvZ2IGRsmzzrxB74RxdEHouiu/PPiX9rpMkgKB8gnAAAAAElFTkSuQmCC"
              : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAApCAYAAAClfnCxAAAFRklEQVRYhbWZWWxWRRTHf99HK2uh0ILIGqiEioqamBANEekLaABjjEQfNPomIZgYH6zxwS3xQV8UE1B8IARRoRFwwwUNJBATdgggSGUpixiWWBAKXejfh3Nver/55t77Le0/meSbM2fOnJnvzFnmZiSRgnnAq0A9cBP4A9gB7AR2AZcd/ruAgcDeNMEe3AYsAp4HpgJZ4BiwClgK3MrhlpTUPlI6Lkg6IGm3pPOStkgakSLX10YGMuKwwp2TJOyJAhR38ZmkyhIUR9KvKbJvyTZYkPI/FaF0t6TXSlQaSXMKXGdGdF5Fgv3dA/wHHAcuAUOBOqDG4bsJvACsLcHGQzwL7AFWA4uBKR4eAadzKfGn8bSk/h76SEmPSnpL0kVJM8s48bDtk1QX/B4t6aDn1L9y55W6WL2kzZKm9ILiSNrp9GslNUnqDNpqSUPKVX6UpPmS9ksa3wtKV0q6Q9IuSeMkDXbGK5TgALIptlgPfAAcBNqB34EngYvAiYD+ITCtQNvuBywAVgLNwA3gu0DeUeAacD6gLQGGA52x0mJ2NVrS5zL3FGKlcwqvKxdNkibEyMtKelHSCWfOogjPGEnNznibpPclDfXJ9S00WxZsojgpaYDnLz3n8F2RxYcoX7WkTcrHUc/aCzx8knRM0rQ05Z+S1O6Z3OjbuaRPPbxdkhYG41Wy6OvDMo+8CklXY/jPSbo9yh+1+RnAF1h+4WJTjNUdibHrlViceAeYHjP3hIfWhd0jH8YAb0YJYZCqAr7Er3g7cDhG4KUY+iBgBZakxeF6DP3vhDkN0U6ofCMwKWZCC24214N/ExZ6KGEM7FB86EiYUxXtZAPCywkTLqYoUSoGxdAHJMzZH+1kgYXAkIQJVxLGbiSMpWFMDD1Jl+XRTgUwN2WRB4B1MWO1KXPT5PowLob+CfB9lJCR1AzcmbDIRqySKhXzsShd6dA7sHsWvaCTgL8gL/Ivx0y7K4cq6XqMXw2xLsbHF9OmS1oj6aYje7OkmoCnRtIvzvh2SbPi5FZ4duliQnEH7cVpzDOtA34DHsbiyn3A2aANB64CG7Dc/hvgUJLQjKRTwMQEnutYARLn2tIwI1C6EyuqXbebCVp3sYKzwD8pPIMxj1QKGoAt2L/XjT9eiBIUB1O+kCeKt7FNFIN7gfXYMwhYabe4SBmJyEh6HPihAN4NWK1ZiPlMBLbjd3uHgK3AOezNp53cwFSNmVF/zGRbsPehljxJQSbXkuJxQhyQU8E7LSNpnqSzBcorBrvVk60iiYwkgJdwolcKDgLfAqcw31sN3I3Z+OQi5JSC9cBzQFu4i36StvXiKf0py+v7CmvlFCPjJJ3pBcGtsqrnx16QlYS5rs1OVn4dWQwuq+cdp0755WRvYqPv0g2VFdvdRQrbrp6Ho7CNlT0W9YUJtYYX1of7gVewp46qGJ5uzCV+DHyNBRwfxgPLgNlY6B8LjMBcZAfmLq8BbcHvIdjFd5O5KDqSlA9RCTyIvc3UYml0G/ZuvoP4UjBEA7a5aVj6/XPaggH6A48B72L1sIvmcrPFtLZEPW8/+0qUMUjSDo/ZLO1LxRuUe2/WlCFrlqN4p6QpaelwOWjEwnyIuJq1EOxx+u/Rx2Zz3DmtVtnrWSmypkbkNMmCamohUg62Of1h2IexpNcBHzJYVgv2Ue0ZwtS6D09+lKQjysdh2XtmtgAZE4OT3iv7oJEzXoirLAfDgDewxM+NFRewQuUQcBL7PNQV8NUBM4P+KqwSyytY+lr5EAOBOcAjmM+eAIzCTGggFjdasU3sw77xbgXOJAn9H8pnsNW435MkAAAAAElFTkSuQmCC"
          }
          alt="logo"
        />
      </div>
      <div className="nav">
        <ul className="nav-links">
          <HeaderLinks name="me" />
          <HeaderLinks name="project" />
          <HeaderLinks name="awards" />
          <HeaderLinks name="why me" />
          <HeaderLinks name="let's talk" />
        </ul>
      </div>
    </div>
  );
}

export default Header;
