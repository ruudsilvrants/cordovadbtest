# cordovadbtest

This repository is a test project to ask questions about the cordova-sqlite-ext plugin in combination with a pre-populated db.
Currently the project and DB queries run succesfully when using the cordova-sqlite-storage, when using the cordova-sqlite-ext plugin 
the following exception occurs multiple times when invoking the same queries:

02-17 09:49:54.853: W/System.err(16153): java.sql.SQLException: prepare statement failed with error: 26
02-17 09:49:54.853: W/System.err(16153): 	at io.liteglue.SQLiteGlueConnection.prepareStatement(SQLiteGlueConnection.java:45)
02-17 09:49:54.853: W/System.err(16153): 	at io.sqlc.SQLiteConnectorDatabase.executeSqlStatementNDK(SQLiteConnectorDatabase.java:168)
02-17 09:49:54.853: W/System.err(16153): 	at io.sqlc.SQLiteConnectorDatabase.executeSqlBatch(SQLiteConnectorDatabase.java:109)
02-17 09:49:54.853: W/System.err(16153): 	at io.sqlc.SQLitePlugin$DBRunner.run(SQLitePlugin.java:410)
02-17 09:49:54.853: W/System.err(16153): 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1113)
02-17 09:49:54.853: W/System.err(16153): 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:588)
02-17 09:49:54.853: W/System.err(16153): 	at java.lang.Thread.run(Thread.java:818)

