import { WorkoutPlan } from '../types';

export const workoutPlans: Record<string, Record<string, WorkoutPlan>> = {
  en: {
    '3day': {
      name: "3-Day Full Body",
      description: "Perfect for beginners or those with limited time. Full body workouts 3 times per week.",
      days: [
        {
          name: "Day 1: Full Body A",
          focus: "Compound Movements",
          duration: "45-60 min",
          difficulty: 'Beginner',
          exercises: [
            {
              name: "Squats",
              sets: "3",
              reps: "8-12",
              instructions: "Keep chest up, knees tracking over toes. Descend until thighs parallel to ground."
            },
            {
              name: "Push-ups",
              sets: "3",
              reps: "8-15",
              instructions: "Full range of motion. Keep body in straight line from head to heels."
            },
            {
              name: "Bent-over Rows",
              sets: "3",
              reps: "8-12",
              instructions: "Hinge at hips, pull weight to lower chest. Keep core engaged."
            },
            {
              name: "Overhead Press",
              sets: "3",
              reps: "8-10",
              instructions: "Press from shoulder level overhead. Keep core tight, avoid arching back."
            },
            {
              name: "Plank",
              sets: "3",
              reps: "30-60 sec",
              instructions: "Hold straight line from head to heels. Engage core throughout."
            }
          ]
        },
        {
          name: "Day 2: Full Body B",
          focus: "Functional Strength",
          duration: "45-60 min",
          difficulty: 'Beginner',
          exercises: [
            {
              name: "Deadlifts",
              sets: "3",
              reps: "6-8",
              instructions: "Hip hinge movement. Keep bar close to body, chest up."
            },
            {
              name: "Incline Push-ups",
              sets: "3",
              reps: "10-15",
              instructions: "Hands elevated on bench. Control descent and explosive push."
            },
            {
              name: "Lunges",
              sets: "3",
              reps: "10 each leg",
              instructions: "Step forward, drop back knee toward ground. Keep torso upright."
            },
            {
              name: "Pull-ups",
              sets: "3",
              reps: "5-10",
              instructions: "Pull with lats, squeeze shoulder blades. Use assistance if needed."
            },
            {
              name: "Side Plank",
              sets: "2",
              reps: "20-40 sec each",
              instructions: "Hold straight line, engage obliques. Switch sides."
            }
          ]
        },
        {
          name: "Day 3: Full Body C",
          focus: "Power & Conditioning",
          duration: "45-60 min",
          difficulty: 'Intermediate',
          exercises: [
            {
              name: "Goblet Squats",
              sets: "3",
              reps: "12-15",
              instructions: "Hold weight close to chest. Deep range of motion."
            },
            {
              name: "Dumbbell Press",
              sets: "3",
              reps: "8-12",
              instructions: "Press dumbbells up and slightly together at top."
            },
            {
              name: "Single-arm Rows",
              sets: "3",
              reps: "10 each arm",
              instructions: "Support body, pull weight to hip. Squeeze lat at top."
            },
            {
              name: "Mountain Climbers",
              sets: "3",
              reps: "20-30",
              instructions: "Fast alternating knee drives. Keep hips level."
            },
            {
              name: "Burpees",
              sets: "3",
              reps: "5-10",
              instructions: "Full body movement. Jump up, drop down, push-up, repeat."
            }
          ]
        }
      ],
      restDays: 4
    },
    '4day': {
      name: "4-Day Upper/Lower Split",
      description: "Balanced approach focusing on upper and lower body separately. Great for intermediate lifters.",
      days: [
        {
          name: "Day 1: Upper Body A",
          focus: "Chest & Triceps",
          duration: "60-75 min",
          difficulty: 'Intermediate',
          exercises: [
            {
              name: "Bench Press",
              sets: "4",
              reps: "6-8",
              instructions: "Lower bar to chest with control. Drive up explosively."
            },
            {
              name: "Incline Dumbbell Press",
              sets: "3",
              reps: "8-10",
              instructions: "45-degree incline. Press up and slightly together."
            },
            {
              name: "Seated Cable Rows",
              sets: "4",
              reps: "8-10",
              instructions: "Pull to lower chest. Squeeze shoulder blades."
            },
            {
              name: "Overhead Press",
              sets: "3",
              reps: "8-10",
              instructions: "Press from shoulders overhead. Keep core engaged."
            },
            {
              name: "Tricep Dips",
              sets: "3",
              reps: "10-12",
              instructions: "Lower until arms parallel. Push to full extension."
            },
            {
              name: "Face Pulls",
              sets: "3",
              reps: "12-15",
              instructions: "Pull rope to face level. Focus on rear delts."
            }
          ]
        },
        {
          name: "Day 2: Lower Body A",
          focus: "Quads & Glutes",
          duration: "60-75 min",
          difficulty: 'Intermediate',
          exercises: [
            {
              name: "Back Squats",
              sets: "4",
              reps: "6-8",
              instructions: "Deep squat, chest up. Drive through heels."
            },
            {
              name: "Romanian Deadlifts",
              sets: "3",
              reps: "8-10",
              instructions: "Hip hinge, feel hamstring stretch. Control the weight."
            },
            {
              name: "Bulgarian Split Squats",
              sets: "3",
              reps: "10 each leg",
              instructions: "Rear foot elevated. Drop into lunge position."
            },
            {
              name: "Leg Press",
              sets: "3",
              reps: "12-15",
              instructions: "Full range of motion. Control both phases."
            },
            {
              name: "Walking Lunges",
              sets: "3",
              reps: "12 each leg",
              instructions: "Long stride, keep torso upright throughout."
            },
            {
              name: "Calf Raises",
              sets: "4",
              reps: "15-20",
              instructions: "Full range, pause at top. Control descent."
            }
          ]
        },
        {
          name: "Day 3: Upper Body B",
          focus: "Back & Biceps",
          duration: "60-75 min",
          difficulty: 'Intermediate',
          exercises: [
            {
              name: "Pull-ups",
              sets: "4",
              reps: "6-10",
              instructions: "Pull with lats, squeeze shoulder blades together."
            },
            {
              name: "Barbell Rows",
              sets: "4",
              reps: "8-10",
              instructions: "Hinge at hips, pull bar to lower chest."
            },
            {
              name: "Dumbbell Flyes",
              sets: "3",
              reps: "10-12",
              instructions: "Wide arc motion, feel chest stretch at bottom."
            },
            {
              name: "Lateral Raises",
              sets: "3",
              reps: "12-15",
              instructions: "Raise to shoulder height. Lead with pinkies."
            },
            {
              name: "Barbell Curls",
              sets: "3",
              reps: "10-12",
              instructions: "Control weight, avoid swinging. Focus on biceps."
            },
            {
              name: "Hammer Curls",
              sets: "3",
              reps: "12-15",
              instructions: "Neutral grip. Control both up and down phases."
            }
          ]
        },
        {
          name: "Day 4: Lower Body B",
          focus: "Hamstrings & Posterior Chain",
          duration: "60-75 min",
          difficulty: 'Intermediate',
          exercises: [
            {
              name: "Conventional Deadlifts",
              sets: "4",
              reps: "5-6",
              instructions: "Hip hinge pattern. Keep bar close to body."
            },
            {
              name: "Front Squats",
              sets: "3",
              reps: "8-10",
              instructions: "Upright torso, elbows high. Deep squat position."
            },
            {
              name: "Hip Thrusts",
              sets: "3",
              reps: "12-15",
              instructions: "Squeeze glutes at top. Focus on hip extension."
            },
            {
              name: "Leg Curls",
              sets: "3",
              reps: "12-15",
              instructions: "Controlled tempo. Squeeze hamstrings at peak."
            },
            {
              name: "Step-ups",
              sets: "3",
              reps: "10 each leg",
              instructions: "Full foot on platform. Drive through heel."
            },
            {
              name: "Seated Calf Raises",
              sets: "4",
              reps: "15-20",
              instructions: "Full range of motion. Pause and squeeze at top."
            }
          ]
        }
      ],
      restDays: 3
    },
    '5day': {
      name: "5-Day Push/Pull/Legs",
      description: "Advanced split for experienced lifters. High volume and frequency for maximum muscle growth.",
      days: [
        {
          name: "Day 1: Push (Chest, Shoulders, Triceps)",
          focus: "Pushing Movements",
          duration: "75-90 min",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "Barbell Bench Press",
              sets: "4",
              reps: "6-8",
              instructions: "Competition style. Arch back, retract shoulders."
            },
            {
              name: "Overhead Press",
              sets: "4",
              reps: "6-8",
              instructions: "Standing press. Drive through legs, press overhead."
            },
            {
              name: "Incline Dumbbell Press",
              sets: "3",
              reps: "8-10",
              instructions: "30-45 degree incline. Full range of motion."
            },
            {
              name: "Dumbbell Lateral Raises",
              sets: "4",
              reps: "12-15",
              instructions: "Slight forward lean. Lead with pinkies."
            },
            {
              name: "Close-Grip Bench Press",
              sets: "3",
              reps: "8-10",
              instructions: "Hands shoulder-width apart. Focus on triceps."
            },
            {
              name: "Tricep Pushdowns",
              sets: "3",
              reps: "10-12",
              instructions: "Keep elbows stationary. Full stretch at bottom."
            },
            {
              name: "Diamond Push-ups",
              sets: "3",
              reps: "8-12",
              instructions: "Hands form diamond. Slow controlled movement."
            }
          ]
        },
        {
          name: "Day 2: Pull (Back, Biceps)",
          focus: "Pulling Movements",
          duration: "75-90 min",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "Deadlifts",
              sets: "4",
              reps: "5-6",
              instructions: "Hip hinge. Keep bar close, chest up throughout."
            },
            {
              name: "Wide-Grip Pull-ups",
              sets: "4",
              reps: "6-10",
              instructions: "Wide grip, pull to upper chest. Control descent."
            },
            {
              name: "Barbell Rows",
              sets: "4",
              reps: "8-10",
              instructions: "Pendlay style. Pull to lower chest explosively."
            },
            {
              name: "T-Bar Rows",
              sets: "3",
              reps: "10-12",
              instructions: "Chest supported. Squeeze shoulder blades."
            },
            {
              name: "Barbell Curls",
              sets: "4",
              reps: "8-10",
              instructions: "Strict form. Control eccentric phase."
            },
            {
              name: "Hammer Curls",
              sets: "3",
              reps: "10-12",
              instructions: "Neutral grip. Alternate arms or together."
            },
            {
              name: "Face Pulls",
              sets: "3",
              reps: "15-20",
              instructions: "High rep rear delt work. Squeeze at peak."
            }
          ]
        },
        {
          name: "Day 3: Legs (Quads, Hamstrings, Glutes)",
          focus: "Lower Body Power",
          duration: "75-90 min",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "Back Squats",
              sets: "5",
              reps: "5-6",
              instructions: "Heavy compound movement. Full depth, drive up."
            },
            {
              name: "Romanian Deadlifts",
              sets: "4",
              reps: "8-10",
              instructions: "Hip hinge pattern. Feel hamstring stretch."
            },
            {
              name: "Bulgarian Split Squats",
              sets: "3",
              reps: "12 each leg",
              instructions: "Rear foot elevated. Focus on front leg."
            },
            {
              name: "Leg Press",
              sets: "4",
              reps: "15-20",
              instructions: "High rep burnout. Full range of motion."
            },
            {
              name: "Leg Curls",
              sets: "4",
              reps: "12-15",
              instructions: "Lying or seated. Squeeze hamstrings hard."
            },
            {
              name: "Leg Extensions",
              sets: "3",
              reps: "15-20",
              instructions: "Pre-exhaust quads. Control the weight."
            },
            {
              name: "Calf Raises",
              sets: "5",
              reps: "15-20",
              instructions: "Standing and seated variations. Full ROM."
            }
          ]
        },
        {
          name: "Day 4: Push (Volume Focus)",
          focus: "Hypertrophy Push",
          duration: "75-90 min",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "Incline Barbell Press",
              sets: "4",
              reps: "8-10",
              instructions: "30-45 degree incline. Focus on upper chest."
            },
            {
              name: "Dumbbell Shoulder Press",
              sets: "4",
              reps: "10-12",
              instructions: "Seated or standing. Full range of motion."
            },
            {
              name: "Dips",
              sets: "3",
              reps: "10-15",
              instructions: "Chest or tricep focus. Add weight if needed."
            },
            {
              name: "Lateral Raises",
              sets: "4",
              reps: "12-15",
              instructions: "Constant tension. Control both phases."
            },
            {
              name: "Tricep Pushdowns",
              sets: "4",
              reps: "12-15",
              instructions: "Various grips. Focus on tricep contraction."
            },
            {
              name: "Rear Delt Flyes",
              sets: "3",
              reps: "15-20",
              instructions: "Bent over or machine. Squeeze rear delts."
            }
          ]
        },
        {
          name: "Day 5: Pull (Volume Focus)",
          focus: "Hypertrophy Pull",
          duration: "75-90 min",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "Lat Pulldowns",
              sets: "4",
              reps: "10-12",
              instructions: "Wide and narrow grip variations."
            },
            {
              name: "Cable Rows",
              sets: "4",
              reps: "10-12",
              instructions: "Various handles. Pull to different heights."
            },
            {
              name: "Shrugs",
              sets: "4",
              reps: "12-15",
              instructions: "Barbell or dumbbell. Squeeze traps at top."
            },
            {
              name: "Preacher Curls",
              sets: "3",
              reps: "10-12",
              instructions: "Strict form. Control eccentric phase."
            },
            {
              name: "Cable Curls",
              sets: "3",
              reps: "12-15",
              instructions: "Various angles. Constant tension."
            },
            {
              name: "Rear Delt Flyes",
              sets: "3",
              reps: "15-20",
              instructions: "Bent over or machine. Squeeze rear delts."
            }
          ]
        }
      ],
      restDays: 2
    },
    '6day': {
      name: "6-Day Push/Pull/Legs x2",
      description: "High frequency training for advanced athletes. Maximum volume and muscle stimulation.",
      days: [
        {
          name: "Day 1: Push A (Heavy)",
          focus: "Strength Focus",
          duration: "90+ min",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "Barbell Bench Press",
              sets: "5",
              reps: "3-5",
              instructions: "Heavy strength work. Perfect form essential."
            },
            {
              name: "Overhead Press",
              sets: "4",
              reps: "5-6",
              instructions: "Standing press. Drive through legs."
            },
            {
              name: "Dips",
              sets: "3",
              reps: "6-8",
              instructions: "Add weight for strength. Full range."
            },
            {
              name: "Close-Grip Bench",
              sets: "3",
              reps: "6-8",
              instructions: "Heavy tricep work. Shoulder-width grip."
            }
          ]
        },
        {
          name: "Day 2: Pull A (Heavy)",
          focus: "Strength Focus",
          duration: "90+ min",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "Deadlifts",
              sets: "5",
              reps: "3-5",
              instructions: "Heavy pulls. Perfect form. Long rest periods."
            },
            {
              name: "Pull-ups",
              sets: "4",
              reps: "5-6",
              instructions: "Add weight. Full range of motion."
            },
            {
              name: "Barbell Rows",
              sets: "4",
              reps: "6-8",
              instructions: "Heavy rowing. Explosive concentric."
            },
            {
              name: "Barbell Curls",
              sets: "3",
              reps: "6-8",
              instructions: "Heavy curl work. Strict form."
            }
          ]
        },
        {
          name: "Day 3: Legs A (Heavy)",
          focus: "Strength Focus",
          duration: "90+ min",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "Back Squats",
              sets: "5",
              reps: "3-5",
              instructions: "Heavy squats. Full depth. Long rest."
            },
            {
              name: "Romanian Deadlifts",
              sets: "4",
              reps: "5-6",
              instructions: "Heavy RDLs. Feel hamstring stretch."
            },
            {
              name: "Front Squats",
              sets: "3",
              reps: "6-8",
              instructions: "Upright torso. Elbows high."
            },
            {
              name: "Romanian Deadlifts",
              sets: "3",
              reps: "8-10",
              instructions: "Hamstring focus. Control the stretch."
            }
          ]
        },
        {
          name: "Day 4: Push B (Volume)",
          focus: "Hypertrophy Focus",
          duration: "75-90 min",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "Incline Dumbbell Press",
              sets: "4",
              reps: "8-12",
              instructions: "Volume work. Focus on muscle connection."
            },
            {
              name: "Dumbbell Shoulder Press",
              sets: "4",
              reps: "10-12",
              instructions: "Higher reps. Control the weight."
            },
            {
              name: "Lateral Raises",
              sets: "4",
              reps: "12-15",
              instructions: "Multiple sets. Focus on form."
            },
            {
              name: "Tricep Pushdowns",
              sets: "4",
              reps: "12-15",
              instructions: "Various angles. High volume."
            }
          ]
        },
        {
          name: "Day 5: Pull B (Volume)",
          focus: "Hypertrophy Focus",
          duration: "75-90 min",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "Lat Pulldowns",
              sets: "4",
              reps: "10-12",
              instructions: "Various grips. Focus on lats."
            },
            {
              name: "Cable Rows",
              sets: "4",
              reps: "10-12",
              instructions: "Different handles. Squeeze back."
            },
            {
              name: "Face Pulls",
              sets: "4",
              reps: "15-20",
              instructions: "High rep rear delt work."
            },
            {
              name: "Barbell Curls",
              sets: "4",
              reps: "12-15",
              instructions: "Various exercises. High volume."
            }
          ]
        },
        {
          name: "Day 6: Legs B (Volume)",
          focus: "Hypertrophy Focus",
          duration: "75-90 min",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "Leg Press",
              sets: "4",
              reps: "15-20",
              instructions: "High rep leg work. Full range."
            },
            {
              name: "Leg Curls",
              sets: "4",
              reps: "12-15",
              instructions: "Hamstring focus. Squeeze hard."
            },
            {
              name: "Leg Extensions",
              sets: "4",
              reps: "15-20",
              instructions: "Quad isolation. Control weight."
            },
            {
              name: "Calf Raises",
              sets: "5",
              reps: "20-25",
              instructions: "High volume calf work. Various angles."
            }
          ]
        }
      ],
      restDays: 1
    }
  },
  ar: {
    '3day': {
      name: "3 أيام - الجسم كامل",
      description: "مثالي للمبتدئين أو أصحاب الوقت المحدود. تمارين الجسم كامل 3 مرات أسبوعياً.",
      days: [
        {
          name: "اليوم 1: تمارين الجسم كامل أ",
          focus: "الحركات المركبة",
          duration: "45-60 دقيقة",
          difficulty: 'Beginner',
          exercises: [
            {
              name: "القرفصاء",
              sets: "3",
              reps: "8-12",
              instructions: "احتفظ بالصدر مرفوعاً والركبتين متجهتين نحو أصابع القدم."
            },
            {
              name: "الضغط",
              sets: "3",
              reps: "8-15",
              instructions: "المدى الحركي الكامل. حافظ على الجسم في خط مستقيم."
            },
            {
              name: "التجديف المنحني",
              sets: "3",
              reps: "8-12",
              instructions: "انحن من الوركين، اسحب الوزن للصدر السفلي."
            },
            {
              name: "الضغط العلوي",
              sets: "3",
              reps: "8-10",
              instructions: "اضغط من مستوى الكتف لأعلى الرأس."
            },
            {
              name: "البلانك",
              sets: "3",
              reps: "30-60 ثانية",
              instructions: "حافظ على خط مستقيم من الرأس للقدمين."
            }
          ]
        },
        {
          name: "اليوم 2: تمارين الجسم كامل ب",
          focus: "القوة الوظيفية",
          duration: "45-60 دقيقة",
          difficulty: 'Beginner',
          exercises: [
            {
              name: "الرفعة الميتة",
              sets: "3",
              reps: "6-8",
              instructions: "حركة انحناء الورك. احتفظ بالبار قريباً من الجسم."
            },
            {
              name: "الضغط المائل",
              sets: "3",
              reps: "10-15",
              instructions: "اليدين مرفوعتين على مقعد. تحكم في النزول."
            },
            {
              name: "الطعن",
              sets: "3",
              reps: "10 كل رجل",
              instructions: "اخطو للأمام، أنزل الركبة الخلفية نحو الأرض."
            },
            {
              name: "العقلة",
              sets: "3",
              reps: "5-10",
              instructions: "اسحب بعضلات الظهر. استخدم المساعدة إذا لزم الأمر."
            },
            {
              name: "البلانك الجانبي",
              sets: "2",
              reps: "20-40 ثانية كل جانب",
              instructions: "حافظ على خط مستقيم، شد عضلات الجانب."
            }
          ]
        },
        {
          name: "اليوم 3: تمارين الجسم كامل ج",
          focus: "القوة والتكييف",
          duration: "45-60 دقيقة",
          difficulty: 'Intermediate',
          exercises: [
            {
              name: "القرفصاء بالدمبل",
              sets: "3",
              reps: "12-15",
              instructions: "احمل الوزن قريباً من الصدر. مدى حركي عميق."
            },
            {
              name: "ضغط الدمبل",
              sets: "3",
              reps: "8-12",
              instructions: "اضغط الدمبل لأعلى وقليلاً نحو بعضهما."
            },
            {
              name: "التجديف بذراع واحدة",
              sets: "3",
              reps: "10 كل ذراع",
              instructions: "ادعم الجسم، اسحب الوزن للورك."
            },
            {
              name: "متسلق الجبال",
              sets: "3",
              reps: "20-30",
              instructions: "تبديل سريع للركبتين. حافظ على الوركين مستويين."
            },
            {
              name: "البيربي",
              sets: "3",
              reps: "5-10",
              instructions: "حركة الجسم كامل. اقفز لأعلى، انزل، اضغط، كرر."
            }
          ]
        }
      ],
      restDays: 4
    },
    '4day': {
      name: "4 أيام - علوي/سفلي",
      description: "نهج متوازن يركز على الجزء العلوي والسفلي منفصلين. رائع للمتوسطين.",
      days: [
        {
          name: "اليوم 1: تمارين الجزء العلوي أ",
          focus: "الصدر والترايسبس",
          duration: "60-75 دقيقة",
          difficulty: 'Intermediate',
          exercises: [
            {
              name: "ضغط البنش",
              sets: "4",
              reps: "6-8",
              instructions: "أنزل البار للصدر بتحكم. ادفع لأعلى بقوة."
            },
            {
              name: "الضغط المائل بالدمبل",
              sets: "3",
              reps: "8-10",
              instructions: "ميل 45 درجة. اضغط لأعلى وقليلاً نحو بعضهما."
            },
            {
              name: "التجديف بالكيبل",
              sets: "4",
              reps: "8-10",
              instructions: "اسحب للصدر السفلي. اضغط لوحي الكتف."
            },
            {
              name: "الضغط العلوي",
              sets: "3",
              reps: "8-10",
              instructions: "اضغط من الكتفين لأعلى الرأس."
            },
            {
              name: "تراجع الترايسبس",
              sets: "3",
              reps: "10-12",
              instructions: "أنزل حتى تصبح الذراعين موازيتين."
            },
            {
              name: "سحب الوجه",
              sets: "3",
              reps: "12-15",
              instructions: "اسحب الحبل لمستوى الوجه."
            }
          ]
        },
        {
          name: "اليوم 2: تمارين الجزء السفلي أ",
          focus: "الفخذ الأمامي والمؤخرة",
          duration: "60-75 دقيقة",
          difficulty: 'Intermediate',
          exercises: [
            {
              name: "القرفصاء الخلفي",
              sets: "4",
              reps: "6-8",
              instructions: "قرفصاء عميق، صدر مرفوع. ادفع من الكعبين."
            },
            {
              name: "الرفعة الرومانية",
              sets: "3",
              reps: "8-10",
              instructions: "انحناء الورك، اشعر بتمدد الفخذ الخلفي."
            },
            {
              name: "القرفصاء البلغاري",
              sets: "3",
              reps: "10 كل رجل",
              instructions: "القدم الخلفية مرفوعة. انزل في وضعية الطعن."
            },
            {
              name: "مكبس الأرجل",
              sets: "3",
              reps: "12-15",
              instructions: "المدى الحركي الكامل. تحكم في المرحلتين."
            },
            {
              name: "الطعن المتحرك",
              sets: "3",
              reps: "12 كل رجل",
              instructions: "خطوة طويلة، حافظ على الجذع منتصباً."
            },
            {
              name: "رفع السمانة",
              sets: "4",
              reps: "15-20",
              instructions: "المدى الكامل، توقف في الأعلى."
            }
          ]
        },
        {
          name: "اليوم 3: تمارين الجزء العلوي ب",
          focus: "الظهر والبايسبس",
          duration: "60-75 دقيقة",
          difficulty: 'Intermediate',
          exercises: [
            {
              name: "العقلة",
              sets: "4",
              reps: "6-10",
              instructions: "اسحب بعضلات الظهر، اضغط لوحي الكتف."
            },
            {
              name: "تجديف البار",
              sets: "4",
              reps: "8-10",
              instructions: "انحن من الوركين، اسحب البار للصدر السفلي."
            },
            {
              name: "فتح الدمبل",
              sets: "3",
              reps: "10-12",
              instructions: "حركة قوس واسعة، اشعر بتمدد الصدر."
            },
            {
              name: "الرفع الجانبي",
              sets: "3",
              reps: "12-15",
              instructions: "ارفع لمستوى الكتف. قد بالخناصر."
            },
            {
              name: "تثني البار",
              sets: "3",
              reps: "10-12",
              instructions: "تحكم في الوزن، تجنب الأرجحة."
            },
            {
              name: "التثني المطرقي",
              sets: "3",
              reps: "12-15",
              instructions: "قبضة متعادلة. تحكم في المرحلتين."
            }
          ]
        },
        {
          name: "اليوم 4: تمارين الجزء السفلي ب",
          focus: "الفخذ الخلفي والسلسلة الخلفية",
          duration: "60-75 دقيقة",
          difficulty: 'Intermediate',
          exercises: [
            {
              name: "الرفعة الميتة التقليدية",
              sets: "4",
              reps: "5-6",
              instructions: "نمط انحناء الورك. احتفظ بالبار قريباً."
            },
            {
              name: "القرفصاء الأمامي",
              sets: "3",
              reps: "8-10",
              instructions: "جذع منتصب، مرفقين عاليين."
            },
            {
              name: "دفع الورك",
              sets: "3",
              reps: "12-15",
              instructions: "اضغط المؤخرة في الأعلى."
            },
            {
              name: "تثني الأرجل",
              sets: "3",
              reps: "12-15",
              instructions: "سرعة منضبطة. اضغط الفخذ الخلفي."
            },
            {
              name: "صعود الدرج",
              sets: "3",
              reps: "10 كل رجل",
              instructions: "القدم كاملة على المنصة."
            },
            {
              name: "رفع السمانة جالساً",
              sets: "4",
              reps: "15-20",
              instructions: "المدى الكامل. توقف واضغط في الأعلى."
            }
          ]
        }
      ],
      restDays: 3
    },
    '5day': {
      name: "5 أيام - دفع/سحب/أرجل",
      description: "تقسيم متقدم للرياضيين ذوي الخبرة. حجم وتكرار عالي لأقصى نمو عضلي.",
      days: [
        {
          name: "اليوم 1: تمارين الدفع (صدر، أكتاف، ترايسبس)",
          focus: "حركات الدفع",
          duration: "75-90 دقيقة",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "ضغط البار",
              sets: "4",
              reps: "6-8",
              instructions: "أسلوب المنافسة. قوس الظهر، اسحب الكتفين."
            },
            {
              name: "الضغط العلوي",
              sets: "4",
              reps: "6-8",
              instructions: "ضغط واقف. ادفع من الأرجل."
            },
            {
              name: "الضغط المائل بالدمبل",
              sets: "3",
              reps: "8-10",
              instructions: "ميل 30-45 درجة. المدى الكامل."
            },
            {
              name: "الرفع الجانبي بالدمبل",
              sets: "4",
              reps: "12-15",
              instructions: "ميل خفيف للأمام. قد بالخناصر."
            },
            {
              name: "ضغط البنش ضيق",
              sets: "3",
              reps: "8-10",
              instructions: "اليدين بعرض الكتفين. ركز على الترايسبس."
            },
            {
              name: "دفع الترايسبس",
              sets: "3",
              reps: "10-12",
              instructions: "حافظ على المرفقين ثابتين."
            },
            {
              name: "الضغط الماسي",
              sets: "3",
              reps: "8-12",
              instructions: "اليدين تشكلان ماسة. حركة بطيئة."
            }
          ]
        },
        {
          name: "اليوم 2: تمارين السحب (ظهر، بايسبس)",
          focus: "حركات السحب",
          duration: "75-90 دقيقة",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "الرفعة الميتة",
              sets: "4",
              reps: "5-6",
              instructions: "انحناء الورك. البار قريب، الصدر مرفوع."
            },
            {
              name: "العقلة واسعة",
              sets: "4",
              reps: "6-10",
              instructions: "قبضة واسعة، اسحب للصدر العلوي."
            },
            {
              name: "تجديف البار",
              sets: "4",
              reps: "8-10",
              instructions: "أسلوب بندلاي. اسحب للصدر السفلي."
            },
            {
              name: "تجديف T-Bar",
              sets: "3",
              reps: "10-12",
              instructions: "دعم الصدر. اضغط لوحي الكتف."
            },
            {
              name: "تثني البار",
              sets: "4",
              reps: "8-10",
              instructions: "شكل صارم. تحكم في المرحلة السلبية."
            },
            {
              name: "التثني المطرقي",
              sets: "3",
              reps: "10-12",
              instructions: "قبضة متعادلة. بالتناوب أو معاً."
            },
            {
              name: "سحب الوجه بالكيبل",
              sets: "3",
              reps: "15-20",
              instructions: "تكرارات عالية للكتف الخلفي."
            }
          ]
        },
        {
          name: "اليوم 3: تمارين الأرجل (فخذ أمامي، خلفي، مؤخرة)",
          focus: "قوة الجزء السفلي",
          duration: "75-90 دقيقة",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "القرفصاء الخلفي",
              sets: "5",
              reps: "5-6",
              instructions: "حركة مركبة ثقيلة. عمق كامل."
            },
            {
              name: "الرفعة الرومانية",
              sets: "4",
              reps: "8-10",
              instructions: "نمط انحناء الورك. اشعر بتمدد الفخذ الخلفي."
            },
            {
              name: "القرفصاء البلغاري",
              sets: "3",
              reps: "12 كل رجل",
              instructions: "القدم الخلفية مرفوعة. ركز على الأمامية."
            },
            {
              name: "مكبس الأرجل",
              sets: "4",
              reps: "15-20",
              instructions: "تكرارات عالية. المدى الكامل."
            },
            {
              name: "تثني الأرجل",
              sets: "4",
              reps: "12-15",
              instructions: "مستلقي أو جالس. اضغط الفخذ الخلفي."
            },
            {
              name: "تمديد الأرجل",
              sets: "3",
              reps: "15-20",
              instructions: "إرهاق مسبق للفخذ الأمامي."
            },
            {
              name: "رفع السمانة",
              sets: "5",
              reps: "15-20",
              instructions: "واقف وجالس. المدى الكامل."
            }
          ]
        },
        {
          name: "اليوم 4: تمارين الدفع (تركيز الحجم)",
          focus: "تضخم الدفع",
          duration: "75-90 دقيقة",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "الضغط المائل بالبار",
              sets: "4",
              reps: "8-10",
              instructions: "ميل 30-45 درجة. ركز على الصدر العلوي."
            },
            {
              name: "ضغط الكتف بالدمبل",
              sets: "4",
              reps: "10-12",
              instructions: "جالس أو واقف. المدى الكامل."
            },
            {
              name: "التراجع",
              sets: "3",
              reps: "10-15",
              instructions: "تركيز الصدر أو الترايسبس."
            },
            {
              name: "الرفع الجانبي بالكيبل",
              sets: "4",
              reps: "12-15",
              instructions: "توتر مستمر. تحكم في المرحلتين."
            },
            {
              name: "دفع الترايسبس",
              sets: "4",
              reps: "12-15",
              instructions: "قبضات مختلفة. ركز على الترايسبس."
            },
            {
              name: "فتح الكتف الخلفي",
              sets: "3",
              reps: "15-20",
              instructions: "منحني أو آلة. اضغط الكتف الخلفي."
            }
          ]
        },
        {
          name: "اليوم 5: تمارين السحب (تركيز الحجم)",
          focus: "تضخم السحب",
          duration: "75-90 دقيقة",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "السحب العلوي",
              sets: "4",
              reps: "10-12",
              instructions: "قبضات واسعة وضيقة."
            },
            {
              name: "التجديف بالكيبل",
              sets: "4",
              reps: "10-12",
              instructions: "مقابض مختلفة. اسحب لارتفاعات مختلفة."
            },
            {
              name: "هز الكتفين",
              sets: "4",
              reps: "12-15",
              instructions: "بار أو دمبل. اضغط عضلات الترابيس."
            },
            {
              name: "تثني الواعظ",
              sets: "3",
              reps: "10-12",
              instructions: "شكل صارم. تحكم في المرحلة السلبية."
            },
            {
              name: "تثني الكيبل",
              sets: "3",
              reps: "12-15",
              instructions: "زوايا مختلفة. توتر مستمر."
            },
            {
              name: "الفتح العكسي",
              sets: "3",
              reps: "15-20",
              instructions: "كيبل أو دمبل. ركز على الكتف الخلفي."
            }
          ]
        }
      ],
      restDays: 2
    },
    '6day': {
      name: "6 أيام - دفع/سحب/أرجل × 2",
      description: "تدريب عالي التكرار للرياضيين المتقدمين. أقصى حجم وتحفيز عضلي.",
      days: [
        {
          name: "اليوم 1: تمارين دفع أ (ثقيل)",
          focus: "تركيز القوة",
          duration: "90+ دقيقة",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "ضغط البار",
              sets: "5",
              reps: "3-5",
              instructions: "عمل قوة ثقيل. الشكل المثالي أساسي."
            },
            {
              name: "الضغط العلوي",
              sets: "4",
              reps: "5-6",
              instructions: "ضغط واقف. ادفع من الأرجل."
            },
            {
              name: "التراجع",
              sets: "3",
              reps: "6-8",
              instructions: "أضف وزن للقوة. المدى الكامل."
            },
            {
              name: "البنش ضيق",
              sets: "3",
              reps: "6-8",
              instructions: "عمل ترايسبس ثقيل."
            }
          ]
        },
        {
          name: "اليوم 2: تمارين سحب أ (ثقيل)",
          focus: "تركيز القوة",
          duration: "90+ دقيقة",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "الرفعة الميتة",
              sets: "5",
              reps: "3-5",
              instructions: "سحبات ثقيلة. شكل مثالي. راحة طويلة."
            },
            {
              name: "العقلة",
              sets: "4",
              reps: "5-6",
              instructions: "أضف وزن. المدى الكامل."
            },
            {
              name: "تجديف البار",
              sets: "4",
              reps: "6-8",
              instructions: "تجديف ثقيل. انقباض متفجر."
            },
            {
              name: "تثني البار",
              sets: "3",
              reps: "6-8",
              instructions: "عمل تثني ثقيل. شكل صارم."
            }
          ]
        },
        {
          name: "اليوم 3: تمارين أرجل أ (ثقيل)",
          focus: "تركيز القوة",
          duration: "90+ دقيقة",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "القرفصاء الخلفي",
              sets: "5",
              reps: "3-5",
              instructions: "قرفصاء ثقيل. عمق كامل. راحة طويلة."
            },
            {
              name: "الرفعة الرومانية",
              sets: "4",
              reps: "5-6",
              instructions: "رومانية ثقيلة. اشعر بتمدد الفخذ الخلفي."
            },
            {
              name: "القرفصاء الأمامي",
              sets: "3",
              reps: "6-8",
              instructions: "جذع منتصب. مرفقين عاليين."
            },
            {
              name: "الرفعة الميتة بأرجل مستقيمة",
              sets: "3",
              reps: "8-10",
              instructions: "تركيز الفخذ الخلفي. تحكم في التمدد."
            }
          ]
        },
        {
          name: "اليوم 4: تمارين دفع ب (حجم)",
          focus: "تركيز التضخم",
          duration: "75-90 دقيقة",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "الضغط المائل بالدمبل",
              sets: "4",
              reps: "8-12",
              instructions: "عمل حجم. ركز على الاتصال العضلي."
            },
            {
              name: "ضغط الكتف بالدمبل",
              sets: "4",
              reps: "10-12",
              instructions: "تكرارات أعلى. تحكم في الوزن."
            },
            {
              name: "الرفع الجانبي",
              sets: "4",
              reps: "12-15",
              instructions: "مجموعات متعددة. ركز على الشكل."
            },
            {
              name: "دفع الترايسبس",
              sets: "4",
              reps: "12-15",
              instructions: "زوايا مختلفة. حجم عالي."
            }
          ]
        },
        {
          name: "اليوم 5: تمارين سحب ب (حجم)",
          focus: "تركيز التضخم",
          duration: "75-90 دقيقة",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "السحب العلوي",
              sets: "4",
              reps: "10-12",
              instructions: "قبضات مختلفة. ركز على عضلات الظهر."
            },
            {
              name: "التجديف بالكيبل",
              sets: "4",
              reps: "10-12",
              instructions: "مقابض مختلفة. اضغط الظهر."
            },
            {
              name: "سحب الوجه",
              sets: "4",
              reps: "15-20",
              instructions: "تكرارات عالية للكتف الخلفي."
            },
            {
              name: "تثني البايسبس",
              sets: "4",
              reps: "12-15",
              instructions: "تمارين مختلفة. حجم عالي."
            }
          ]
        },
        {
          name: "اليوم 6: تمارين أرجل ب (حجم)",
          focus: "تركيز التضخم",
          duration: "75-90 دقيقة",
          difficulty: 'Advanced',
          exercises: [
            {
              name: "مكبس الأرجل",
              sets: "4",
              reps: "15-20",
              instructions: "عمل أرجل عالي التكرار. المدى الكامل."
            },
            {
              name: "تثني الأرجل",
              sets: "4",
              reps: "12-15",
              instructions: "تركيز الفخذ الخلفي. اضغط بقوة."
            },
            {
              name: "تمديد الأرجل",
              sets: "4",
              reps: "15-20",
              instructions: "عزل الفخذ الأمامي. تحكم في الوزن."
            },
            {
              name: "رفع السمانة",
              sets: "5",
              reps: "20-25",
              instructions: "عمل سمانة عالي الحجم. زوايا مختلفة."
            }
          ]
        }
      ],
      restDays: 1
    }
  }
};