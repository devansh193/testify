// "use client";
// import { useGetBoardDetails } from "@/features/board/api/use-get-board-details";
// import { useParams } from "next/navigation";
// import { UserBoardDetail } from "../_components/user-board-details";
// import { useRecoilValue, useSetRecoilState } from "recoil";
// import {
//   userCurrentSlideAtom,
//   userSlideCount,
// } from "@/recoil/client-atom/atom";
// import UserTextReview from "../_components/user-text-review";
// import { UserVideoReview } from "../_components/user-video-review";
// import { UserPersonal } from "../_components/user-personal";
// import { UserThankyou } from "../_components/user-thankyou";
// import {
//   userPreviousSlideAtom,
//   userSideBoardTitle,
// } from "@/recoil/client-atom/atom";
// import { LoadingComponent } from "@/app/(routes)/_components/board-components/board-loading";

// const Review = () => {
//   const params = useParams();
//   const { slug } = params;
//   const title = Array.isArray(slug) ? slug[0] : slug;
//   const { data, isLoading, isError, error } = useGetBoardDetails(title);
//   const totalSlides = data?.isVideoReview ? 5 : 4;
//   const setUserSlideCount = useSetRecoilState(userSlideCount);
//   setUserSlideCount(totalSlides);
//   const currentSlide = useRecoilValue(userCurrentSlideAtom);
//   const previousSlide = useRecoilValue(userPreviousSlideAtom);
//   const setCurrentSlide = useSetRecoilState(userCurrentSlideAtom);
//   const setPreviousSlide = useSetRecoilState(userPreviousSlideAtom);

//   const handleSlideChange = (newSlide: number) => {
//     setPreviousSlide(currentSlide);
//     setCurrentSlide(newSlide);
//     console.log("Current Slide: ", currentSlide);
//     console.log("Previous Slide: ", previousSlide);
//   };
//   const setTitle = useSetRecoilState(userSideBoardTitle);
//   setTitle(data?.boardTitle || "");

//   if (isLoading) {
//     return (
//       <div className="flex flex-col p-4 md:p-8">
//         <div className="flex items-center justify-center mt-24 sm:mt-24">
//           <LoadingComponent />
//         </div>
//       </div>
//     );
//   }
//   if (isError) {
//     return <div>Error: {error.message}</div>;
//   }
//   return (
//     <div>
//       {currentSlide === 0 ? (
//         <UserBoardDetail
//           title={data?.pageTitle || ""}
//           description={data?.pageDescription || ""}
//           isVideoReview={data?.isVideoReview || false}
//         />
//       ) : currentSlide === 1 ? (
//         <UserTextReview
//           title={data?.textReviewPageTitle || ""}
//           questions={data?.textQuestions || [""]}
//           onChange={handleSlideChange}
//           isVideoReview={data?.isVideoReview || false}
//         />
//       ) : currentSlide === 2 ? (
//         <UserVideoReview
//           title={data?.videoReviewPageTitle || ""}
//           questions={data?.videoQuestions || []}
//           onChange={handleSlideChange}
//         />
//       ) : currentSlide === 3 ? (
//         <UserPersonal title={data?.personalPageTitle || ""} />
//       ) : currentSlide === 4 ? (
//         <UserThankyou
//           title={data?.thankYouPageTitle || ""}
//           message={data?.thankYouPageMessage || ""}
//         />
//       ) : (
//         <div>Whoops a daisy! We ran into an error.</div>
//       )}
//     </div>
//   );
// };
// export default Review;
