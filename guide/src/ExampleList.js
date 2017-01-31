import React from 'react';
import { P } from './components';
import {
    MediaCardEx,
    MediaCardGroupEx,
    TabsEx,
    MeterGaugeEx,
    ShowMoreEllipsisEx,
    InstanceCardEx,
    ProgressAvatarEx,
} from './examples';

const ExampleList = [
    {
        name: "Tabs",
        desc: (
            <div>
                <P>
                    Tabs are used to change views within a specific scope. Filtering a list is a common use for tabs in Troposphere.
                </P>
                <P>
                    Tabs should contain functions of equal priority. For example Tabs should not contain several items for changing list veiws and one Tab for something like settings or help.
                </P>
            </div>
        ), 
        render: TabsEx,
    },
    {
        name: "MeterGauge",
        desc: (
            <P>
                A MeterGauge is used to depict a percentage of a known quantity. A common use in Troposphere is to show how much of a total resource a user HAS consumed or WILL consume. In the case that a MeterGauge is showing how much of a known quantity a user WILL consume, in a form for example, an after value can be passed in addition to the start value. 
            </P>
        ),
        render: MeterGaugeEx,
    },
    {
        name: "ShowMoreEllipsis",
        desc: (
            <div>
                <P>
                    ShowMoreEllipsis is used to show he user that there is more content to see that has been hidden by the UI. Generally it is unecessary to trigger any events with it as it is used on cards which expand when the user clicks anywhere inside.
                </P>
            </div>
        ),
        render: ShowMoreEllipsisEx,
    },
    {
        name: "ProgressAvatar",
        desc: (
            <P>
                CircleProgressBar is used to inform the user that a proccess is taking place as well as what percentage of that proccess is finished.  
            </P>
        ),
        render: ProgressAvatarEx,
    },
    {
        name: "MediaCard",
        desc: (
            <P>
                MediaCards are used for objects like Projects, Project Resources, and Images that have their own information and actions associated with them. They typically have a short description and a long description that can be seen by expanding the card. A contextual menu, attached to the card, contains all of the actions for that card.
            </P>
        ),
        render: MediaCardEx,
    },
    {
        name: "MediaCardGroup",
        desc: (
            <P>
                Since only one MediaCard should be open at a time and clicking off the media card should close it a MediaCardGroup is used to control this interdependent behaviour.
            </P>
        ),
        render: MediaCardGroupEx,
    },
    {
        name: "InstanceCard",
        desc: (
            <P>
                Since only one MediaCard should be open at a time and clicking off the media card should close it a MediaCardGroup is used to control this interdependent behaviour.
            </P>
        ),
        render: InstanceCardEx,
    },
];

export default ExampleList;
