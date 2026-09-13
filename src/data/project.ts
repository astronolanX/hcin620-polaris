interface TextSegment {
  text: string;
  emphasis?: boolean;
}

interface ProjectSection {
  id: string;
  title: string;
  paragraphs: TextSegment[][];
}

export const projectSections: ProjectSection[] = [
  {
    id: 'problem',
    title: 'The Problem',
    paragraphs: [[
      { text: 'For our project, we plan to address the problem around ' },
      { text: 'information and navigational gaps for people who want to dispose electronic waste safely and responsibly.', emphasis: true },
    ]],
  },
  {
    id: 'solution',
    title: 'The Solution',
    paragraphs: [
      [
        { text: 'We are planning to ' },
        { text: 'create a platform that focuses on e-waste guidance', emphasis: true },
        { text: ' which helps users to find an appropriate disposal method and locations.' },
      ],
      [{ text: 'By combining clear disposal details with location-based navigation, we aim to make the disposal process easier to understand and reduce the need to search across multiple sources.' }],
    ],
  },
  {
    id: 'users',
    title: 'Primary User',
    paragraphs: [[{ text: 'Individual consumers who would like to dispose of their old electronics.' }]],
  },
  {
    id: 'stakeholders',
    title: 'The Stakeholders',
    paragraphs: [[{ text: 'E-waste collection and recycling organizations and environmental conservationists.' }]],
  },
];
