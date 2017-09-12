import React from "react";
import { shallow } from "enzyme";

import Button from "src/components/Button";

describe("components/Button", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<Button>Test</Button>);
      expect(component).to.not.be.null;
    });

  });

});
