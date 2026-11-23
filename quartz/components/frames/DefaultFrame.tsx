import { PageFrame, PageFrameProps } from "./types"
import HeaderConstructor from "../Header"

const Header = HeaderConstructor()

// This is an incredibly dumb way to handle grouping ArticleTitle and ContentMeta into a div,
// but it works and I have no clue how to do anything better.
//
// I also have no clue how to make it not be an implicit any, and it causes no issues, so I'm just going to ignore it.
const BeforeBodyComponent = ({componentData, beforeBody}) => {
  let BreadcrumbContainer = beforeBody[0]
  let ArticleTitle = beforeBody[1]
  let ContentMeta = beforeBody[2]
  return (
    <div class="popover-hint">
      <BreadcrumbContainer {...componentData} />
      <div class="page-title-container">
        <ArticleTitle {...componentData} />
        <ContentMeta {...componentData} />
      </div>
    </div>
  )
}

/**
 * The default page frame — three-column layout with left sidebar, center
 * content (header + body + afterBody), and right sidebar, followed by a footer.
 *
 * This is the original Quartz layout, extracted from renderPage.tsx.
 */
export const DefaultFrame: PageFrame = {
  name: "default",
  render({
    componentData,
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    left,
    right,
    footer,
    sidebars,
  }: PageFrameProps) {

    return (
      <>
        <div class="left sidebar" data-sidebar-mode={sidebars?.left ?? "fit"}>
          {left.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        <div class="center">
          <div class="page-header">
            <Header {...componentData}>
              {header.map((HeaderComponent) => (
                <HeaderComponent {...componentData} />
              ))}
            </Header>
            <BeforeBodyComponent componentData={componentData} beforeBody={beforeBody} />
          </div>
          <Content {...componentData} />
          <hr />
          <div class="page-footer">
            {afterBody.map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>
        </div>
        <div class="right sidebar" data-sidebar-mode={sidebars?.right ?? "fit"}>
          {right.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        {footer.map((FooterComponent) => (
          <FooterComponent {...componentData} />
        ))}
      </>
    )
  },
}
