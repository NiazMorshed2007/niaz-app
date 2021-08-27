import React from "react";
import HeaderLinks from "./HeaderLinks";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAApCAYAAAClfnCxAAAFRklEQVRYhbWZWWxWRRTHf99HK2uh0ILIGqiEioqamBANEekLaABjjEQfNPomIZgYH6zxwS3xQV8UE1B8IARRoRFwwwUNJBATdgggSGUpixiWWBAKXejfh3Nver/55t77Le0/meSbM2fOnJnvzFnmZiSRgnnAq0A9cBP4A9gB7AR2AZcd/ruAgcDeNMEe3AYsAp4HpgJZ4BiwClgK3MrhlpTUPlI6Lkg6IGm3pPOStkgakSLX10YGMuKwwp2TJOyJAhR38ZmkyhIUR9KvKbJvyTZYkPI/FaF0t6TXSlQaSXMKXGdGdF5Fgv3dA/wHHAcuAUOBOqDG4bsJvACsLcHGQzwL7AFWA4uBKR4eAadzKfGn8bSk/h76SEmPSnpL0kVJM8s48bDtk1QX/B4t6aDn1L9y55W6WL2kzZKm9ILiSNrp9GslNUnqDNpqSUPKVX6UpPmS9ksa3wtKV0q6Q9IuSeMkDXbGK5TgALIptlgPfAAcBNqB34EngYvAiYD+ITCtQNvuBywAVgLNwA3gu0DeUeAacD6gLQGGA52x0mJ2NVrS5zL3FGKlcwqvKxdNkibEyMtKelHSCWfOogjPGEnNznibpPclDfXJ9S00WxZsojgpaYDnLz3n8F2RxYcoX7WkTcrHUc/aCzx8knRM0rQ05Z+S1O6Z3OjbuaRPPbxdkhYG41Wy6OvDMo+8CklXY/jPSbo9yh+1+RnAF1h+4WJTjNUdibHrlViceAeYHjP3hIfWhd0jH8YAb0YJYZCqAr7Er3g7cDhG4KUY+iBgBZakxeF6DP3vhDkN0U6ofCMwKWZCC24214N/ExZ6KGEM7FB86EiYUxXtZAPCywkTLqYoUSoGxdAHJMzZH+1kgYXAkIQJVxLGbiSMpWFMDD1Jl+XRTgUwN2WRB4B1MWO1KXPT5PowLob+CfB9lJCR1AzcmbDIRqySKhXzsShd6dA7sHsWvaCTgL8gL/Ivx0y7K4cq6XqMXw2xLsbHF9OmS1oj6aYje7OkmoCnRtIvzvh2SbPi5FZ4duliQnEH7cVpzDOtA34DHsbiyn3A2aANB64CG7Dc/hvgUJLQjKRTwMQEnutYARLn2tIwI1C6EyuqXbebCVp3sYKzwD8pPIMxj1QKGoAt2L/XjT9eiBIUB1O+kCeKt7FNFIN7gfXYMwhYabe4SBmJyEh6HPihAN4NWK1ZiPlMBLbjd3uHgK3AOezNp53cwFSNmVF/zGRbsPehljxJQSbXkuJxQhyQU8E7LSNpnqSzBcorBrvVk60iiYwkgJdwolcKDgLfAqcw31sN3I3Z+OQi5JSC9cBzQFu4i36StvXiKf0py+v7CmvlFCPjJJ3pBcGtsqrnx16QlYS5rs1OVn4dWQwuq+cdp0755WRvYqPv0g2VFdvdRQrbrp6Ho7CNlT0W9YUJtYYX1of7gVewp46qGJ5uzCV+DHyNBRwfxgPLgNlY6B8LjMBcZAfmLq8BbcHvIdjFd5O5KDqSlA9RCTyIvc3UYml0G/ZuvoP4UjBEA7a5aVj6/XPaggH6A48B72L1sIvmcrPFtLZEPW8/+0qUMUjSDo/ZLO1LxRuUe2/WlCFrlqN4p6QpaelwOWjEwnyIuJq1EOxx+u/Rx2Zz3DmtVtnrWSmypkbkNMmCamohUg62Of1h2IexpNcBHzJYVgv2Ue0ZwtS6D09+lKQjysdh2XtmtgAZE4OT3iv7oJEzXoirLAfDgDewxM+NFRewQuUQcBL7PNQV8NUBM4P+KqwSyytY+lr5EAOBOcAjmM+eAIzCTGggFjdasU3sw77xbgXOJAn9H8pnsNW435MkAAAAAElFTkSuQmCC"
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
}

export default Header;
