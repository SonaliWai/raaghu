
import { RdsIconModule } from '@libs/rds-icon';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsAppDetailsComponent } from './rds-app-details.component';
import { RdsCheckboxModule } from '@libs/rds-checkbox';
import { RdsLabelModule } from '@libs/rds-label';

export default {
  title: 'Elements/App-details',
  component: RdsAppDetailsComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RdsIconModule,RdsLabelModule,RdsCheckboxModule],
      }),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<RdsAppDetailsComponent> = (args: RdsAppDetailsComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  item:{ 
     title: 'Zapier', 
     subtitle: 'Build custom automation and intefrations with app', 
     icon: 'zapier',
     route: '/home',
     selected:true,
     iconHeight:'18px',
     iconWidth:'18px',
     iconFill:false,
     iconStroke:true
    }
}

