import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { about } from '../../portfolio';
import './About.css';

const About = () => {
  const { name, role1, role2, description, resume, social } = about;

  return (
    <div className="about center">
      <div className="about__image">
        <img
          src={`${process.env.PUBLIC_URL}/images/about/profile.png`}
          alt="Profile"
          className="profile-image"
        />
      </div>

      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {(role1 || role2) && (
        <h2 className="about__role">
          {role1 && <span>A {role1}.</span>}
          {role2 && <br />}
          {role2 && <span>A {role2}.</span>}
        </h2>
      )}

      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <a href={resume}>
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
