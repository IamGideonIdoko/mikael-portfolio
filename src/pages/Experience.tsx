import { memo } from 'react';
import { ExperienceWrapper } from '../styles/Experience.style';
import { ComponentItem } from '../interfaces/general.interface';
import experienceBg from '../assets/images/experiencebg.jpg';

const Experience = ({ componentItem, activePosition }: { componentItem: ComponentItem; activePosition: number }) => {
  const viewActive = componentItem.position === activePosition;
  return (
    <ExperienceWrapper id="experience" viewActive={viewActive} elevated={viewActive ? false : componentItem.elevated}>
      <div className={`experience-bg ${viewActive ? 'view-active' : ''}`}>
        <img src={experienceBg} />
      </div>
      <div className="experience-container">
        <div>
          <h1>Experience</h1> <div>{/* <span>🡐</span> <span>1 / 3</span> <span>🡒</span> */}</div>
        </div>
        <table>
          <tbody>
            <tr>
              <td>2010-2012</td>
              <td>Graphic Designer, Art &amp; Co,</td>
              <td>
                Which firmament dominion first rule and tree. The seas he i were cattle Under living. It may beast
                eveery forth place.
              </td>
            </tr>
            <tr>
              <td>2010-2012</td>
              <td>Graphic Designer, Art &amp; Co,</td>
              <td>
                Which firmament dominion first rule and tree. The seas he i were cattle Under living. It may beast
                eveery forth place.
              </td>
            </tr>
            <tr>
              <td>2010-2012</td>
              <td>Graphic Designer, Art &amp; Co,</td>
              <td>
                Which firmament dominion first rule and tree. The seas he i were cattle Under living. It may beast
                eveery forth place.
              </td>
            </tr>
          </tbody>
        </table>
        <button className="resume-btn">Download Resume ⬇</button>
      </div>
    </ExperienceWrapper>
  );
};

export default memo(Experience, (prevProps, nextProps) => {
  return (
    prevProps.activePosition === nextProps.activePosition &&
    prevProps.componentItem.elevated === nextProps.componentItem.elevated
  );
});
