import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ToyCategory = () => {
  const [categoryToy, setCategoryToy] = useState([]);
  // console.log(categoryToy);
  useEffect(() => {
    fetch("http://localhost:5000/toyCategories")
      .then((res) => res.json())
      .then((data) => setCategoryToy(data));
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl mb-5">
        Select your desired toys from this category below.
      </h1>
      <div className="w-2/4 mx-auto mt-10 bg-blue-100">
        <Tabs forceRenderTabPanel defaultIndex={1}>
          <TabList>
            <Tab>The Marvel</Tab>
            <Tab>Star Wars</Tab>
            <Tab>DC Comis</Tab>
          </TabList>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab>Iron Man</Tab>
                <Tab>Spider Man</Tab>
              </TabList>
              <TabPanel>
                <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png"
                  alt="Homer Simpson"
                />
              </TabPanel>
              <TabPanel>
                <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png"
                  alt="Marge Simpson"
                />
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab>Philip J. Fry</Tab>
                <Tab>Turanga Leela</Tab>
              </TabList>

              <TabPanel>
                <p>
                  A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot
                  who is Fry's best friend. Built in Tijuana, Mexico, he is the
                  Planet Express Ship's cook.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png"
                  alt="Bender Bending Rodriguez"
                />
              </TabPanel>

              <TabPanel>
                <p>
                  Many times great-nephew of Fry. CEO and owner of Planet
                  Express delivery company. Tenured professor of Mars
                  University.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/FuturamaProfessorFarnsworth.png/175px-FuturamaProfessorFarnsworth.png"
                  alt="Professor Hubert J. Farnsworth"
                />
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab>Philip J. Fry</Tab>
                <Tab>Turanga Leela</Tab>
              </TabList>

              <TabPanel>
                <p>
                  Mutant cyclops. Captain of the Planet Express Ship. Love
                  interest of Fry.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png"
                  alt="Turanga Leela"
                />
              </TabPanel>
              <TabPanel>
                <p>
                  A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot
                  who is Fry's best friend. Built in Tijuana, Mexico, he is the
                  Planet Express Ship's cook.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png"
                  alt="Bender Bending Rodriguez"
                />
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ToyCategory;
