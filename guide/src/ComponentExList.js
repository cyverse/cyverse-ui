import React from 'react';
import { P } from 'cyverse-ui';
import {
    SearchBarEx,
    InfoBlockEx,
    MediaCardEx,
    MediaCardGroupEx,
    MeterGaugeEx,
    ShowMoreEllipsisEx,
    ProgressAvatarEx,
    PillEx,
    SubHeaderEx,
    ButtonMenuEx,
    VerticalMenuEx,
    IdentityEx,
    SkeletonListEx
} from './examples';

import SkeletonListExCode from '!raw-loader!./examples/SkeletonListEx';
import SearchBarExCode from '!raw-loader!./examples/SearchBarEx';
import InfoBlockExCode from '!raw-loader!./examples/InfoBlockEx';
import IdentityExCode from '!raw-loader!./examples/IdentityEx';
import MediaCardExCode from '!raw-loader!./examples/MediaCardEx';
import MediaCardGroupExCode from '!raw-loader!./examples/MediaCardGroupEx';
import MeterGaugeExCode from '!raw-loader!./examples/MeterGaugeEx';
import ShowMoreEllipsisExCode from '!raw-loader!./examples/ShowMoreEllipsisEx';
import ProgressAvatarExCode from '!raw-loader!./examples/ProgressAvatarEx';
import PillExCode from '!raw-loader!./examples/PillEx';
import SubHeaderExCode from '!raw-loader!./examples/SubHeaderEx';
import ButtonMenuExCode from '!raw-loader!./examples/ButtonMenuEx';
import VerticalMenuExCode from '!raw-loader!./examples/VerticalMenuEx';

const ExampleList = [
    {
        name: "Identity",
        desc: (
            <div>
                <P>
                    Identity is used on a card or view to provide context to the content. A resource for example, would have the resource name as the primary text and useful meta as the secondary text, like the date the resource was created or a quick summary.
                </P>
                <P>
                    An Identity is located at the top left of a card or view. A small Identity is used on cards and a large Identity or small Identity can be used on views.
                </P>
            </div>
        ),
        render: IdentityEx,
        code: IdentityExCode,
    },
    {
        name: "InfoBlock",
        desc: (
            <div>
                <P>
                    The InfoBlock is used everywhere information is displayed to the user that isn't part of an input or title. Usually at the top of a view to explain the purpose of said view. The icon helps isolate the information from the UI.
                </P>
            </div>
        ),
        render: InfoBlockEx,
        code: InfoBlockExCode,
    },
    {
        name: "Pill",
        desc: (
            <div>
                <P>
                    A Pill is used to indicate meta data like number of active users or if an item is featured or recommended. It is sort of like a badge but smaller to fit under a title or in the footer of a card.
                </P>
            </div>
        ),
        render: PillEx,
        code: PillExCode,
    },
    {
        name: "SearchBar",
        desc: (
            <div>
                <P>
                    The SearchBar is used for searches. It has an active state that helps to inform the user a search is affecting the list in question. An optional onClear prop allows the query to be cleared when the user presses the clear button.
                </P>
            </div>
        ),
        render: SearchBarEx,
        code: SearchBarExCode,
    },
    {
        name: "MeterGauge",
        desc: (
            <P>
                A MeterGauge is used to depict a percentage of a known quantity. A common use in Troposphere is to show how much of a total resource a user HAS consumed or WILL consume. In the case that a MeterGauge is showing how much of a known quantity a user WILL consume, in a form for example, an after value can be passed in addition to the start value.
            </P>
        ),
        render: MeterGaugeEx,
        code: MeterGaugeExCode,
    },
    {
        name: "ShowMoreEllipsis",
        desc: (
            <div>
                <P>
                    ShowMoreEllipsis is used to show he user that there is more content to see that has been hidden by the UI. Generally it is unnecessary to trigger any events with it as it is used on cards which expand when the user clicks anywhere inside.
                </P>
            </div>
        ),
        render: ShowMoreEllipsisEx,
        code: ShowMoreEllipsisExCode,
    },
    {
        name: "ProgressAvatar",
        desc: (
            <P>
                Since an Avatar serves as a visual anchor for an item a ProgressAvatar can be used in place of MUI's Avatar as a clear way to inform the user that a process is taking place on that item as well as what percentage of that process is finished without taking up valuable real estate.
            </P>
        ),
        render: ProgressAvatarEx,
        code: ProgressAvatarExCode,
    },
    {
        name: "MediaCard",
        desc: (
            <P>
                MediaCards are used for objects like Projects, Project Resources, and Images that have their own information and actions associated with them. They typically have a short description and a long description that can be seen by expanding the card. A contextual menu, attached to the card, contains all of the actions for that card.
            </P>
        ),
        render: MediaCardEx,
        code: MediaCardExCode,
    },
    {
        name: "SkeletonList",
        desc: (
            <P>
                SkeletonLists are placeholders for MediaCards while they are loading. They help to inform the user that a list will show.
            </P>
        ),
        render: SkeletonListEx,
        code: SkeletonListExCode,
    },
    {
        name: "MediaCardGroup",
        desc: (
            <P>
                MediaCardGroup is a wrapper for MediaCards that helps to manage opening and closing, scroll animation, and stagger animation of MediaCards as cildren.
            </P>
        ),
        render: MediaCardGroupEx,
        code: MediaCardGroupExCode,
    },
    {
        name: "SubHeader",
        desc: (
            <div>
                <P>
                    SubHeader is the contextual header located at the top of a sub-view. A Sub-view is a view that one would navigate to from a main-view. For example clicking on a list item might open a sub-view detail of that list item. The SubHeader has a back button to navigate back to the main-view and some top level controls or actions for the particular sub-view.
                </P>
            </div>
        ),
        render: SubHeaderEx,
        code: SubHeaderExCode,
    },
    {
        name: "ButtonMenu",
        desc: (
            <div>
                <P>
                    A ButtonMenu is a menu that can be displayed by pressing a RaisedButton. In Troposphere a ButtonMenu is used to with the label "New" and opens a list of things that can be created.
                </P>
                <P>
                    As a general rule menus should appear to the top right of the view so this component defaults to opening from the right and down but can be overridden using <code className="CodeInline">anchorOrigin</code> and <code className="CodeInline">targetOrigin</code>. See  <a target="_blank" href="http://www.material-ui.com/#/components/popover">Material-UI's Popover</a> for better documentation.
                </P>
            </div>
        ),
        render: ButtonMenuEx,
        code: ButtonMenuExCode,
    },
    {
        name: "VerticalMenu",
        desc: (
            <div>
                <P>
                    A VerticalMenu is a menu that can be displayed by pressing a VerticalMenuIcon. In Troposphere a VerticalMenu is used in the top right corner of a header or MediaCard to hold a list of actions that are applied to the item or items within that context.
                </P>
                <P>
                    Because VerticalMenus should appear to the top right corner this component defaults to opening from the right and down but this behavior can be overridden using <code className="CodeInline">anchorOrigin</code> and <code className="CodeInline">targetOrigin</code>. See  <a target="_blank" href="http://www.material-ui.com/#/components/popover">Material-UI's Popover</a> for better documentation.
                </P>
            </div>
        ),
        render: VerticalMenuEx,
        code: VerticalMenuExCode,
    },
];

export default ExampleList;
