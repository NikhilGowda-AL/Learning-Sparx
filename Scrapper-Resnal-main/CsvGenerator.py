import csv

# Define the starting USN and number of students
starting_usn = 1
num_students = 120

# Define the section change point
section_change_point = 65

# Define the batch and semester
batch = 2020
semester = 5

# Open the output file for writing
with open('student_data.csv', 'w', newline='') as csvfile:
    # Create the CSV writer
    writer = csv.writer(csvfile)

    # Write the header row
    writer.writerow(['USN', 'Section', 'Batch', 'Sem'])

    # Generate the student data
    for i in range(num_students):
        # Compute the USN
        usn = f'1BI20IS{starting_usn + i:03d}'

        # Determine the section
        section = 'A' if i < section_change_point - starting_usn else 'B'

        # Write the row
        writer.writerow([usn, section, batch, semester])
