import { Document, Page, Text, View } from '@react-pdf/renderer'
import { resumeData } from './ResumeData'

export const ResumePDF = () => (
  <Document>
    <Page size="A4" style={{ padding: 32, fontSize: 11 }}>
      <Text>{resumeData.name}</Text>
      <Text>{resumeData.title}</Text>
      <Text>{resumeData.subtitle}</Text>

      <View style={{ marginTop: 12 }}>
        <Text>Summary</Text>
        <Text>{resumeData.summary}</Text>
      </View>

      <View style={{ marginTop: 12 }}>
        <Text>Experience</Text>
        {resumeData.experience.map((job, i) => (
          <View key={i} style={{ marginTop: 6 }}>
            <Text>{job.role}</Text>
            <Text>{job.dates}</Text>
            {job.bullets.map((b, j) => (
              <Text key={j}>• {b}</Text>
            ))}
          </View>
        ))}
      </View>

      <View style={{ marginTop: 12 }}>
        <Text>Skills</Text>
        {resumeData.skills.map((s, i) => (
          <Text key={i}>• {s}</Text>
        ))}
      </View>

      <View style={{ marginTop: 12 }}>
        <Text>Education</Text>
        {resumeData.education.map((e, i) => (
          <Text key={i}>
            {e.degree} — {e.school} ({e.dates})
          </Text>
        ))}
      </View>

      <View style={{ marginTop: 12 }}>
        <Text>Certifications</Text>
        {resumeData.certifications.map((e, i) => (
          <Text key={i}>
            {e.name} — {e.institution} ({e.year})
            {e.details && e.details.map((d, j) => (
              <Text key={j} style={{ marginLeft: 8 }}>
                • {d}
              </Text>
            ))}
          </Text>
        ))}
      </View>

      <View style={{ marginTop: 12 }}>
        <Text>Courses</Text>
        {resumeData.courses.map((e, i) => (
          <Text key={i}>
            {e.name} — {e.institution} ({e.year})
          </Text>
        ))}
      </View>
    </Page>
  </Document>
)
