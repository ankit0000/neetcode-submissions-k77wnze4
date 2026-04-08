SELECT student_id, exam_id, score
FROM (
    SELECT 
        student_id,
        exam_id,
        score,
        ROW_NUMBER() OVER (
            PARTITION BY student_id 
            ORDER BY score DESC, exam_id ASC  -- highest score first, smallest exam_id first
        ) AS rn
    FROM exam_results
) ranked
WHERE rn = 1
ORDER BY student_id;