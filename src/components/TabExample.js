import React from "react";
import { Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: "Highr Worshop Model",
    render: () => <Tab.Pane>{row1}</Tab.Pane>,
  },
  {
    menuItem: "Choosing a Workshop Topic",
    render: () => <Tab.Pane>{row2}</Tab.Pane>,
  },
  {
    menuItem: " Creating Workshop Learning Outcomes",
    render: () => <Tab.Pane>{row3}</Tab.Pane>,
  },
  {
    menuItem: " Designing Classroom Showcase Activity",
    render: () => <Tab.Pane>{row4}</Tab.Pane>,
  },
  {
    menuItem: " Drafting Workshop Outline",
    render: () => <Tab.Pane>{row5}</Tab.Pane>,
  },
  {
    menuItem: "Providing Workshop details ",
    render: () => <Tab.Pane>{row6}</Tab.Pane>,
  },
  {
    menuItem: "Recording Introductory Video",
    render: () => <Tab.Pane>{row7}</Tab.Pane>,
  },
];

const row1 = (
  <div>
    <h2>Highr Workshop Model</h2>
    <h3>
      To begin with, we wanted to share what we hope sets Highr’s workshops
      apart from boring, pre-recorded online courses, and what we value in each
      of our workshops.{" "}
    </h3>
    <h4>Your workshop is expected to deliver on these values:</h4>
    <ol>
      <li>
        <h4>Clear Progress Roadmaps:</h4> Each workshop is expected to have
        well-defined Learning Objectives so that participants know how their
        knowledge & skills will grow. All workshop coaches lay particular
        emphasis on the onboarding process which involves participants
        reflecting on where they are now, and what they hope to achieve.
        Participant levels are measured at the beginning of the workshop, in the
        middle, as well as at the end using a progress map.
      </li>
      <li>
        <h4>Structured Engagement :</h4> We know you have a lot you would like
        to share, but our coaches have seen maximum engagement when the content
        focuses on one specific skill, pedagogy, or concept. Given the live
        format, each session requires sound structure & a well-timed script,
        where content is broken down into easily digestible parts. Crucially,
        workshops where teacher talk-time is no more than 20 minutes in total,
        and the rest of the time is spent on participant activities &
        interaction receive positive feedback. Our workshops tend to have 4-5
        sessions, with the average session duration being 1.5 hours. If you find
        that your content does not fit these specifications, we recommend
        designing a series of workshops.
      </li>
      <li>
        <h4>Community-driven Learning:</h4> We call them workshops, because they
        are meant to be interactive; they are not meant to be a lecture series.
        All our workshop coaches imbibe the role of being facilitators, and let
        participant interactions guide learning. With limited teacher talk-time,
        all workshops lay greater emphasis on break-out rooms with focused
        peer-to-peer discussions, and guided group work, with plenty
        opportunities for participants to get to know each other.
      </li>
      <li>
        {" "}
        <h4>Learning-by-doing :</h4>At Highr, we believe that the best way to
        learn is to apply. Each workshop at Highr features a classroom showcase
        activity for participants to make in order to practice what they have
        learnt. All coaches are expected to craft workshops with a final
        activity, where participants design resources they would use in their
        own classrooms, and give and receive feedback on the same.{" "}
      </li>
      <li>
        {" "}
        <h4>Feedback: </h4>One of the fastest ways to learn is to continuously
        engage with the process of learning. This is important for coaches as
        well as participants. All coaches create channels for feedback both for
        participants, as well as for themselves. Opportunities for the
        participant to receive feedback from peers and the coach must be built
        into the workshop design. Coaches must also take feedback from
        participants before, during and after the sessions, and modify the
        sessions, if needed, as per feedback received.
      </li>
    </ol>
  </div>
);

const row2 = (
  <div>
    <h2>Choosing a Workshop Topic</h2>
    <p>
      You might already know what you’d like to teach, or you could take
      inspiration from recommendations under Highr’s Big Four of Quality
      Teaching. Your workshop can align itself to any of these broad areas of
      classroom teaching competencies. Read some suggested topics{" "}
      <a
        href="https://drive.google.com/file/d/1Vbq2bZOBM3_AKPo-z5-7Z-ACn25zE4nH/view?usp=sharing"
        target="_blank"
      >
        under each area here
      </a>
    </p>
  </div>
);

const row3 = (
  <div>
    <h2> Creating Workshop Learning Outcomes</h2>
    <p>
      Outcomes should describe what participants will be able to do by the end
      of the workshop. Clear, specific learning outcomes not only make it easy
      to measure participants’ progress, but also keep you on track while
      designing the sessions. Tips on creating good learning outcomes with
      samples can be
      <a
        href="https://drive.google.com/file/d/1Mt7TIPHzLPaFnsM_2iSAfNH_5NqDfWsC/view?usp=sharing"
        target="_blank"
      >
        found here
      </a>
    </p>
  </div>
);
const row4 = (
  <div>
    <h2>Designing Classroom Showcase Activity</h2>
    <p>
      We believe in the power of learning-by-doing. That is why, all Highr
      workshops include a classroom showcase activity that allows participants
      to demonstrate how they will apply their learning in real-time in their
      classrooms and schools. This activity should be connected with the
      learning outcomes of your workshop, and should be something that
      participants can easily complete.
    </p>

    <h3>We recommend:</h3>
    <ul>
      <li>
        Make your showcase activity easy to start — participants will feel less
        intimidated and will be more likely to complete the activity.
      </li>
      <li>
        The steps to complete the activity should be simple. If your activity
        has multiple steps, you should list them down clearly
      </li>
      <li>
        Clearly mention the format in which your activity will be submitted as
        well as the mode of submission (eg: Video via YouTube or Flipgrid,
        Presentation via Google Slides etc.)
      </li>
      <li>
        Ask students to share works-in-progress with the workshop community to
        foster collaboration between participants.
      </li>
    </ul>
    <h3>Some prompts to get you designing:</h3>
    <p>
      What are 3-4 ways someone can demonstrate that they learned this skill?
    </p>
    <p>What will participants be excited about?</p>
    <p>What will provide the highest sense of accomplishment?</p>
  </div>
);
const row5 = (
  <div>
    <h2>Drafting Workshop Outline</h2>
    <p>
      Outlining your sessions is the best way to ensure your lessons are
      well-organized and engaging. Every workshop at Highr, on an average,
      includes 6-8 hours worth of sessions, broken down into 4-5 sessions of 1.5
      hours each.
    </p>
    <p>
      Please use{" "}
      <a
        href="https://docs.google.com/presentation/d/1e6eDS5GzCbE_-vZTOqyS9Fx-VnG8_2tkaGQmZ9jAqQs/edit?usp=sharing"
        target="_blank"
      >
        {" "}
        this google slide{" "}
      </a>{" "}
      template to create an outline of your sessions. Please share this template
      with us to receive feedback on your session plan.{" "}
    </p>
  </div>
);

const row6 = (
  <div>
    <h2>Providing Workshop Details</h2>
    <table border={1}>
      <tbody>
        <tr>
          <td>
            <p>
              <b>Workshop Title</b> (7 words):
            </p>
            <p>
              <b>Be specific</b> Keep your title to 30 -70 characters
            </p>
            <p>
              <b>Incorporate keywords relevant to your workshop</b>
              Topic, skills, techniques, tools, project, takeaways, buzzwords
            </p>
            Use proper capitalization
          </td>
          <td>
            <textarea style={{ width: "100%" }} rows={8} />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <b>Who should attend?</b> (50 words)
            </p>
            <p>
              Who is this workshop for? Indicate as many as you think would
              benefit. (School leaders, subject experts, special needs educators
              or curriculum designers) Is any prior knowledge required?
            </p>
          </td>
          <td>
            <textarea style={{ width: "100%" }} rows={8} />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <b>Workshop Description </b>(100 - 150 words) : Write a brief
              overview of your workshop
            </p>
            <p>
              <b>What is the workshop about?</b>
            </p>
            <p>
              <b>What skills will participants learn?</b>
            </p>
            <p>
              <b>Why is the workshop useful?</b>
            </p>
            <p>
              <b>
                How can the skills learned be applied in classrooms/professional
                settings?
              </b>
            </p>
            <p>
              <b>Materials / Resources</b>
            </p>
            If any materials or resources are required, you can add them here.
          </td>
          <td>
            <textarea style={{ width: "100%" }} rows={15} />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <p>
              <b>Teaching Competencies Developed</b>
            </p>
            <p>
              You could align your workshop with any of the domains in{" "}
              <a href="https://drive.google.com/file/d/1Vbq2bZOBM3_AKPo-z5-7Z-ACn25zE4nH/view?usp=sharing">
                {" "}
                Highr’s Big Four of Quality Teaching{" "}
              </a>
              . This makes it easier for participants to keep a track of their
              professional development goals
            </p>
          </td>
          <td>
            <textarea style={{ width: "100%" }} rows={8} />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <b>Learning Objectives:</b>
            </p>
            <p>
              Your workshop should contain 3-4 clear learning outcomes which
              clearly demonstrate to participants what they stand to learn by
              the end of the sessions. Read more about writing good learning
              outcomes
              <a href="https://drive.google.com/file/d/1yuKTQE0hX8eAJKc2PUmjyFDJ6pL5Sezk/view?usp=sharing">
                {" "}
                here{" "}
              </a>
              .
            </p>
          </td>
          <td>
            <textarea style={{ width: "100%" }} rows={8} />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <b>Classroom Showcase Activity Description:</b>
              <p>
                Write a description of what participants will create during the
                workshop
              </p>
              <p>
                <b>
                  Start with a concise sentence that summarizes the entire
                  activity.
                </b>
                Follow with a few lines or a brief paragraph explaining the
                details of the activity in more depth. You may also share a
                step-by-step list of instructions.
              </p>
              <p>
                <b>
                  Describe exactly what the finished activity will look like
                </b>
                Also indicate what format it should be in (video, PDF,
                sketchnote), as well as mode of submission.
              </p>
            </p>
          </td>
          <td>
            <textarea style={{ width: "100%" }} rows={15} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const row7 = (
  <div>
    <h2>Recording Introductory Video</h2>
    <p>
      The last step in the workshop design process is to create a video of
      yourself introducing the workshop. This video should tell potential
      participants about you, the coach, and present an overview of the
      workshop. Once you are done recording your video, you can{" "}
      <b>
        upload it to your google drive, or as a private video on Youtube, and
        share the link with us
      </b>{" "}
      on <a href="mailto:contact@highr.in">contact@highr.in</a> .
    </p>
    <p>
      {" "}
      Some tips on filming the video and what you should include can be{" "}
      <a href="https://drive.google.com/file/d/1LRPt6BO1Ve0r6WNjT-5WhDOf-Y2PFvEP/view?usp=sharing">
        {" "}
        found here{" "}
      </a>
      .
    </p>
  </div>
);
const TabExample = () => (
  <div className="container">
    <div className="row" style={{ marginTop: "30px" }}>
      <div className="col-xs-10">
        <Tab
          menu={{ fluid: true, vertical: true }}
          menuPosition="left"
          panes={panes}
          style={{ fontSize: "25px" }}
        />
      </div>
    </div>
  </div>
);

export default TabExample;
