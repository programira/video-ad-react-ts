import React, { useEffect, useState, MutableRefObject, useRef } from 'react';
import styles from './Page.module.scss';
import { AppProps, Section } from "../../types/Data";
import DataService from '../../services/DataService';
import VideoAdvertisement from '../VideoAdvertisement/VideoAdvertisement';
import { VideoAd } from "../../types/VideoAd";
import SectionPart from '../SectionPart/SectionPart';

const Page: React.FunctionComponent = () => {
  const [page, setPage] = useState<Array<AppProps>>([]);
  const [videoAdData, setVideoAdData] = useState<VideoAd>({ videoLink: "" });
  const [sectionsData, setSectionsData] = useState<Array<Section>>();

  // Ref for the element that we want to detect whether on screen
  const ref: any = useRef<HTMLDivElement>();
  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, "-300px");
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = () => {
    const response = DataService.getData();
    setPage(response);
    setVideoAdData(response[0]);
    setSectionsData(response[0].sections);

  };

  return (
    <div className={styles.Page} data-testid="Page">
      {sectionsData ?
        <SectionPart title={sectionsData[0].title} description={sectionsData[0].description} blocks={sectionsData[0].blocks} />
        :
        <div>No first section</div>
      }
      <div ref={ref}>
        {videoAdData?.videoLink ?
          <div className="videoAd">
            <VideoAdvertisement videoLink={videoAdData.videoLink} isVisible={isVisible} />
          </div>
          :
          <div >
            Video placeholder
          </div>
        }
      </div>
      {sectionsData ?
        <SectionPart title={sectionsData[1].title} description={sectionsData[1].description} blocks={sectionsData[1].blocks} />
        :
        <div>No second section</div>
      }
      {sectionsData ?
        <SectionPart title={sectionsData[2].title} description={sectionsData[2].description} blocks={sectionsData[2].blocks} />
        :
        <div>No third sections</div>
      }

    </div>
  )

  // Custom Hook for the video
  function useOnScreen<T extends Element>(ref: MutableRefObject<T>, rootMargin: string = "0px"): boolean {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState<boolean>(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
          threshold: 0.5 /* A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked. */
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.unobserve(ref.current);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
  }


};

export default Page;
