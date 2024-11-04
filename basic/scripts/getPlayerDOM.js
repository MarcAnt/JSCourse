class GetPlayerDOM {
  /* @private */
  values = [];
  DOMdataStories = [];
  /**
   * Create a player.
   */
  constructor(value) {
    this.values = value;
    this.DOMdataStories = document.querySelectorAll("[data-acc-text]");
    // this.DOMdataStories = document.querySelectorAll("[data-model-id]");

    console.log(this.DOMdataStories[0].dataset);
  }
  /**
   * Set variable name and value.
   * @param {string} name - The variable name.
   * @param {string} newValue - The variable value.
   */
  SetVar(name, newValue) {
    const nameExists = this.values.find((value) => {
      return value[name];
    });

    if (nameExists) {
      this.values = this.values.map((value) => {
        if (Object.hasOwn(value, name)) {
          return { ...value, [name]: newValue };
        }
        return value;
      });

      // this.values = newValues;
    } else {
      this.values.push({ [name]: newValue });
    }
  }

  /**
   * Get variable name.
   * @param {string} name - The variable name.
   * @return {string | undefined} The variable value.
   */
  GetVar(name) {
    if (name) {
      let result = this.values.find((val) => {
        if (Object.hasOwn(val, name)) {
          return val;
        }
      });

      return result[name];
    }
  }

  /**
   * Get all variables as string
   * @return {string} The value and name of all variables.
   */
  GetAllVars() {
    return JSON.stringify(Object.values(this.values));
  }
  /**
   * Get all variables as string
   * @param {string} name - Name of the variable.
   * @return {console.log} Show in console the variable value.
   */
  ShowVar(name) {
    console.log(this.GetVar(name));
  }
}

export default GetPlayerDOM;
