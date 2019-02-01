import java.io.IOException;
import java.io.PrintWriter;
import java.io.FileWriter;
import java.io.FileReader;
import java.io.FileNotFoundException;
import java.io.BufferedReader;
import java.io.File;

import java.util.Map;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import javax.naming.InitialContext;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.fasterxml.jackson.databind.JsonNode;
// import com.fasterxml.jackson.databind.ObjectMapper;
// import org.codehaus.jackson.JsonGenerationException;
// import org.codehaus.jackson.map.JsonMappingException;


import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
@WebServlet(urlPatterns = {"/servletInfo/eventLisenerAgent"})
 
public class eventLisenerAgent extends HttpServlet {
 
    public void doGet (
        HttpServletRequest request,HttpServletResponse response
        ) throws ServletException,IOException{
            String h = request.getParameter("ip");
            System.out.println(h);
      //       File destinationFile = new File("C:\\Users\\selab\\Desktop\\AgentWeb\\Primula_Eclipse\\log\\destination.txt"); 

      //       ObjectMapper mapper = new ObjectMapper();
      //       String[] data=new String[3];
      //       try{
      //               BufferedReader br=new BufferedReader(new FileReader(destinationFile));
      //               String line;     //一時保存用
                    

      //               while((line=br.readLine())!=null){     //1行ずつ読み込み
      //                   // System.out.println(line);
      //                   data=line.split(",",0);     //,区切りで読み込み
      //               }


      //               br.close();
      //           }catch(FileNotFoundException e){
      //               // TODO 自動生成された catch ブロック
      //               e.printStackTrace();
      //           }catch(IOException e) {
      //               // TODO 自動生成された catch ブロック
      //               e.printStackTrace();
      //           }        
      //       JsonNode roots[] = new JsonNode[3];
      //       int urlNum = 0;
      //       for(String url:data){
      //           if(url != null){
      //               // System.out.println(url);
      //               roots[urlNum++] = mapper.readTree(new File("C:\\Users\\selab\\Desktop\\AgentWeb\\Primula_Eclipse\\log\\"+url + ".json"));

      //           }
      //       }
      //       String str = "{ \"AgentSphere\":[";
      //       for(int i=0;i<roots.length;i++){
      //           if(roots[i]==null){continue;}
      //           str += roots[i].toString();
      //           if(i != roots.length - 1 && roots[i+1] != null){
      //               str += ",";
      //           }
      //       }

      //       str += "]}";
            
  
      // // response.setContentType("text/plain;charset=UTF-8");
      //   response.setContentType("applicaton/json;charset=UTF-8");
      //   response.setHeader("Cache-Control","nocache");
       

      //   PrintWriter out = response.getWriter();
 
      //   System.out.println(str);
      
      //       out.print(str);
       
        
    }
 
}


