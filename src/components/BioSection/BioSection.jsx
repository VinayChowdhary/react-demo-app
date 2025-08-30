import React from "react";
import "./BioSection.css"

const BioSection = () => {
  return (
    <section id="bio">
      <div className="bio-div">
        <div className="s2-div1">
          <h2>
            When I was 5, I got adbucted by a unicorn family. When they returned
            me to earth, I joined a designer school. But, fo’ real, what I
            learned with my kidnaptive family really gave an edge to my creative
            language.
          </h2>
        </div>
        <div className="s2-div2">
          <div className="s2-div2-d1">
            <p>Being a human is way too complicated. Time to be a unicorn.</p>
          </div>
          <div className="s2-div2-d2">
            <p>
              Try it and you’ll see. Then your Figma files are just gonna fly in
              color, glitter, interactions and autolayout.
            </p>
          </div>
          <div className="s2-div2-d1">
            <p>Also, grow a beard. Check my bio if that is not clear.</p>
          </div>
          <div className="s2-div2-d2" id="s2-div2-d2">
            <p className="p">
              Available for projects, from Monday to Tuesday, mainy between 14
              and 16. (Unless there is a unicorn race on TV - DUH -in that case,
              come back another day). Projects include, RocknRoll covers,
              furniture refurbishing, Unicorn potty training and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
