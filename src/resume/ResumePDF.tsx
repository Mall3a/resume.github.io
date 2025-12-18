import { Document, Page, Text, View } from '@react-pdf/renderer'
import { resumeData } from './ResumeData'

const sectionTitle = {
  fontSize: 12,
  marginTop: 14,
  marginBottom: 6,
  fontWeight: 'bold',
}

const jobTitle = {
  fontWeight: 'bold',
}

const bullet = {
  marginLeft: 10,
}

export const ResumePDF = () => (
  <Document>
    <Page size="A4" style={{ padding: 32, fontSize: 11, lineHeight: 1.4 }}>

      {/* Header */}
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
        {resumeData.name}
      </Text>
      <Text>{resumeData.title}</Text>
      <Text>{resumeData.subtitle}</Text>

      {/* Summary */}
      <View>
        <Text style={sectionTitle}>Summary</Text>
        <Text>{resumeData.summary}</Text>
      </View>

      {/* Experience */}
      <View>
        <Text style={sectionTitle}>Experience</Text>

        {resumeData.experience.map((job, i) => (
          <View key={i} style={{ marginBottom: 8 }}>
            <Text style={jobTitle}>
              {job.role} — {job.company}
            </Text>
            <Text>{job.dates}</Text>
            <Text>{job.desc}</Text>

            {job.bullets.map((b, j) => (
              <Text key={j} style={bullet}>
                • {b}
              </Text>
            ))}
          </View>
        ))}
      </View>

      {/* Skills */}
      <View>
        <Text style={sectionTitle}>Skills</Text>
        <Text>{resumeData.skills.join(' · ')}</Text>
      </View>

      {/* Languages */}
      <View>
        <Text style={sectionTitle}>Languages</Text>
        {resumeData.languages.map((l, i) => (
          <Text key={i}>
            {l.name} — {l.level}
          </Text>
        ))}
      </View>


      {/* Education */}
      <View>
        <Text style={sectionTitle}>Education</Text>
        {resumeData.education.map((e, i) => (
          <Text key={i}>
            {e.degree} — {e.school}, {e.location} ({e.dates})
          </Text>
        ))}
      </View>

      {/* Certifications */}
      <View>
        <Text style={sectionTitle}>Certifications</Text>
        {resumeData.certifications.map((c, i) => (
          <View key={i} style={{ marginBottom: 4 }}>
            <Text>
              {c.name} — {c.institution} ({c.year})
            </Text>
            {c.details?.map((d, j) => (
              <Text key={j} style={bullet}>
                • {d}
              </Text>
            ))}
          </View>
        ))}
      </View>

      {/* Courses */}
      <View>
        <Text style={sectionTitle}>Courses</Text>
        {resumeData.courses.map((c, i) => (
          <Text key={i}>
            {c.name} — {c.institution} ({c.year})
          </Text>
        ))}
      </View>

    </Page>
  </Document>
)
